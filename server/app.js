const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');
require('dotenv').config(); 
const {data}=require("./data")
const {adddata}=require("./controllers/adddata")
const app = express();


app.use(cors());
app.use(express.json());

// MongoDB connection

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');

  // Your initialization logic here, such as starting your server or running some setup tasks

}).catch(err => {
  console.error(process.env.MONGODB_URI, 'Error connecting to MongoDB: ', err);
});

//save data to mongodb calling  adddata controller
adddata(data)


// Routes
app.use('/api', apiRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
