import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
// Load environment variables
dotenv.config();

// connect MongoDB
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test routing

app.get("/", (req, res) => {
  res.send("WebBrave API is running ");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER running on port ${PORT}`);
});
