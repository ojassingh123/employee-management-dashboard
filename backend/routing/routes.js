const express = require("express");
const myapp = express.Router();
const mycollectionname = require("../schima/datamodel");

// ========================================================
// 🟢 REGISTER ROUTE — Auto-create user if not found
// ========================================================
myapp.post("/userregistor", async (req, res) => {
  const { fullname, email, dob, pass, gender } = req.body;

  if (!email || !pass) {
    return res.send({ msg: "email and password are required", status: 420 });
  }

  try {
    const existUser = await mycollectionname.findOne({ email });

    if (existUser) {
      // User already exists
      return res.send({ msg: "User already exists", status: 409 });
    }

    // Auto-create user if not found
    const newUser = new mycollectionname({
      fullname: fullname || `User_${email.split("@")[0]}`,
      email,
      dob: dob || "2000-01-01",
      pass,
      gender: gender || "others",
    });

    await newUser.save();
    res.send({ msg: "User registered successfully", status: 251 });
  } catch (err) {
    console.error("Registration error:", err);
    res.send({ msg: "Server error", status: 500 });
  }
});

// ========================================================
// 🔐 LOGIN ROUTE — Only allows login if user exists
// ========================================================
myapp.post("/userlogin", async (req, res) => {
  const { email, pass } = req.body;

  if (email === "" || pass === "") {
    res.send({ msg: "email and password is blank", status: 420 });
  } else {
    const loginuser = await mycollectionname.findOne({ email: email });

    if (loginuser) {
      if (loginuser.email === email && loginuser.pass === pass) {
        res.send({ msg: "user found successfully", status: 221 });
      } else {
        res.send({ msg: "password is not match", status: 421 });
      }
    } else {
      res.send({ msg: "user not found", status: 440 });
    }
  }
});

// ========================================================
// 👥 GET ALL USERS
// ========================================================
myapp.get("/allusers", async (req, res) => {
  const alluser = await mycollectionname.find();
  res.send({ alluser: alluser, msg: "all user", status: 225 });
});

// ========================================================
// ❌ DELETE USER BY ID
// ========================================================
myapp.delete("/userdelete/:id", async (req, res) => {
  const id = req.params.id;
  const removeuser = await mycollectionname.findByIdAndDelete({ _id: id });
  res.send({ alluser: removeuser, msg: "user delete", status: 225 });
});

// ========================================================
// 🔍 GET SINGLE USER BY ID
// ========================================================
myapp.get("/singleuser/:id", async (req, res) => {
  const id = req.params.id;
  const singleuser = await mycollectionname.findById({ _id: id });
  res.send({ alluser: singleuser, msg: "get single user", status: 251 });
});

module.exports = myapp;
