const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');
require('dotenv').config(); 
const { data } = require("./data");
const { adddata } = require("./controllers/adddata");
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI);

// Save data to MongoDB by calling adddata controller
adddata(data);

// Routes
app.use('/api', apiRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
