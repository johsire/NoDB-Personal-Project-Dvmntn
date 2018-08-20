require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const moviesController = require('./controller/movies_controller.js'); 
const axios = require('axios');


const app = express();

// app.use() --> middleware that runs for Every request;
app.use(bodyParser.json());

app.use(cors());

/** ROUTES **/
// Get all movies
app.get("/api/movies", moviesController.all);

// Get one movie
app.get("/api/movies/:id", moviesController.one);

// Create
app.post("/api/movies/", moviesController.create);

// Update a movie
app.put("/api/movies/:id", moviesController.update);

// Delete a movie
app.delete("/api/movies", moviesController.delete);


const PORT = 5353;
app.listen(PORT, () => {
  console.log('Listening to port' + PORT);
});  
