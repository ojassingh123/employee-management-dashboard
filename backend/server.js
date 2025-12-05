// Load environment variables first
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./database/connectdb");

const app = express();
const port = process.env.PORT || 7800;

// Middleware
app.use(cors({
  origin: "http://localhost:3000", // your React frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// Routes
const myrouting = require("./routing/routes");
app.use(myrouting);

// Start the server
app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
