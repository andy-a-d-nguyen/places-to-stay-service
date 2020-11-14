const express = require('express');
const mongoose = require('mongoose');
// import the route handler
const listingRouter = require('./routers/listing.js');

const PORT = 3004;

const app = express();

// connect to the listings database
mongoose.connect('mongodb://localhost/listings');

app.use(express.json());

// use the route handler
app.use('/', listingRouter);

app.listen(PORT, () => {
  console.log(`more places module listening on http://localhost/${PORT}`);
});
