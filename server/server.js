require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use() --> middleware that runs for Every request
app.use(bodyParser.json());

let { SERVER_PORT } = process.env;
app.listen(PORT, () => {
  console.log('Listening to port' + PORT);
});

// ENDPOINTS=====>>

// app.get('/api/user, (req, res) => {})

// ENDPOINTS=====>>
