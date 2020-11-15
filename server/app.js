const express = require('express');
const listingRouter = require('./routers/listing.js');

const app = express();

app.use(express.json());

app.use('/', listingRouter);

app.get('/', (req, res) => {
  res.status(200).send('success listening to a GET request to root');
});

module.exports = app;
