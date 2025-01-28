const express = require("express");
const mongoose = require("mongoose");
const reportRoutes = require("./Routes/reportRoutes");
const newsRoutes = require("./Routes/newsRoutes");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

// Configure CORS to allow specific origins
const allowedOrigins = [
  "https://qaderoon-project-server.vercel.app/", 
  "http://localhost:3000", // For local development
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // If your frontend needs to send cookies or headers
  })
);

// to use anything in Public
app.use(express.static("Public"));
app.use("/imgs", express.static(path.join(__dirname, "Public/imgs")));

// to access routes
app.use("/reports", reportRoutes);
app.use("/news", newsRoutes);

// if the database connection failed don't run the server
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(-1);
  });
