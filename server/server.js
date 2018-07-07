require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mc = require( __dirname + '/controllers/movies_controller');


const app = express();

// app.use() --> middleware that runs for Every request
app.use(bodyParser.json());
app.use( express.static( __dirname + '/../public/build' ) );

// ======>>ENDPOINTS======>>>
// app.get('/api/user, (req, res) => {})
const baseURL = "/api/movies";
app.post( baseURL, mc.create );
app.get( baseURL, mc.read );
app.put( `${baseURL}/:id`, mc.update );
app.delete( `${baseURL}/:id`, mc.delete );


let { SERVER_PORT } = process.env;
app.listen(PORT, () => {
  console.log('Listening to port' + PORT);
});  