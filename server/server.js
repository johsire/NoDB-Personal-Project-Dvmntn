require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controller/movies_controller.js'); 


const app = express();

// app.use() --> middleware that runs for Every request
app.use(bodyParser.json());

// ======>>ENDPOINTS======>>>
// app.get('/api/user, (req, res) => {})
const baseURL = "/api/movies";
//app.post( baseURL, mc.create );
app.get( baseURL, mc.read );
// app.put( `${baseURL}/:id`, mc.update );
// app.delete( `${baseURL}/:id`, mc.delete );


const PORT = 5353;
app.listen(PORT, () => {
  console.log('Listening to port' + PORT);
});  