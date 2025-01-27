const express = require('express');
const mongoose = require('mongoose');
const reportRoutes = require('./Routes/reportRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 50001;
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(-1);
  });


// to use anything in Public
app.use(express.static('Public'))

// to use in front
app.use(cors());

// to access routes 
app.use('/reports', reportRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});