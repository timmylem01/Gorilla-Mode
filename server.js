const path = require('path');
const express = require("express");

const app = express();
const PORT = 3000;
const DIST_DIR = path.join(__dirname, './dist');
const HTML_FILE = path.join(DIST_DIR, './src/index.html');

const apiRouter = require('./api');

app.use(express.static(DIST_DIR));

/**
 * handle parsing request body
 */
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

 /**
 * define route handlers
 */
app.use('/api', apiRouter);

app.get('/api', (req, res) => {
  return res.status(200).send('hello from the server!');
})

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
})

app.use((req, res) => res.status(404).send('This page does not exist.'));

/**
 * express error handler
 */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}...`));

module.exports = app;
