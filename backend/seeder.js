const mongoose = require("mongoose");
require("dotenv").config();
const { faker } = require("@faker-js/faker");
const User = require("./schima/datamodel"); // ✅ adjust path if needed

// Generate dummy users
const generateUsers = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push({
      fullname: faker.person.fullName(),
      email: faker.internet.email(),
      gender: faker.helpers.arrayElement(["male", "female"]),
      pass: faker.internet.password(8),
      dob: faker.date
        .birthdate({ min: 18, max: 45, mode: "age" })
        .toISOString()
        .split("T")[0],
    });
  }
  return users;
};

const dummyUsers = generateUsers(50);

// Connect to MongoDB and insert
mongoose
  .connect(process.env.MONGO_URL) // ✅ updated to match your current .env
  .then(async () => {
    console.log("✅ Connected to MongoDB");
    await User.deleteMany({}); // optional — clear old data
    await User.insertMany(dummyUsers);
    console.log("🎉 50 Fake Users Inserted Successfully!");
    process.exit();
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  });
