const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const db = process.env.MONGO_URL;
    console.log("📡 MONGO_URL from .env:", db); // Debug line
    await mongoose.connect(db);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ DB connection error:", err.message);
  }
};

module.exports = connectDB;
