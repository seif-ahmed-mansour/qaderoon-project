const express = require("express");
const mongoose = require("mongoose");
const reportRoutes = require("./Routes/reportRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

// to use anything in Public
app.use(express.static("Public"));

// to use in front
app.use(cors());

// to access routes
app.use("/reports", reportRoutes);

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
