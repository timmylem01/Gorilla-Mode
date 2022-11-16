const path = require('path');
const express = require("express");

const app = express();

const apiRouter = require('./api');


app.listen(3000, () => console.log("Server is running"));

app.get('/api', (req, res) => {
  return res.status(200).send('hello');
})

module.exports = app;
