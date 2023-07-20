// Importing dependencies
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
//---------------------------------------
// Initialize .env file variables
require('dotenv').config();
//---------------------------------------
// Create back end
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

//---------------------------------------
// Connect to MongoDB Database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB Database connection established successfully")
});
//------------------------------------------------------------------
// Handle backend routing
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
//-------------------------------------------------------------------
// Run server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
//-------------------------------------------------------------------