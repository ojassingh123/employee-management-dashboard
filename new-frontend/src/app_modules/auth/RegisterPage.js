import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function RegisterPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    dob: "",
    pass: "",
    gender: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullname, email, dob, pass, gender } = formData;
    if (!fullname || !email || !dob || !pass || !gender) {
      toast.warn("Please fill all fields!", { position: "top-center" });
      return;
    }

    try {
      const res = await axios.post("http://localhost:7800/userregistor", formData);
      if (res.data.status === 251) {
        toast.success("Registered successfully! Redirecting to login...", {
          position: "top-center",
        });
        setTimeout(() => navigate("/userportal"), 1500);
      } else if (res.data.status === 409)
        toast.error("User already exists!", { position: "top-center" });
      else toast.info("Unexpected server response", { position: "top-center" });
    } catch {
      toast.error("Server or network error. Try again later.", { position: "top-center" });
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h4 className="fw-bold text-primary text-center mb-3">Create an Account 📝</h4>
      <p className="text-muted text-center mb-4">
        Join the Employee Management Portal
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-semibold">Full Name</label>
          <input
            type="text"
            name="fullname"
            className="form-control rounded-3 shadow-sm"
            placeholder="Enter full name"
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="form-control rounded-3 shadow-sm"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="form-control rounded-3 shadow-sm"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <input
            type="password"
            name="pass"
            className="form-control rounded-3 shadow-sm"
            placeholder="Create a password"
            value={formData.pass}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Gender</label>
          <select
            name="gender"
            className="form-select rounded-3 shadow-sm"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 fw-semibold py-2 rounded-3"
        >
          Register
        </button>
      </form>

      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default RegisterPage;
