// const express = require('express');
const mongoose = require('mongoose');
// import the route handler
// const listingRouter = require('./routers/listing.js');
const app = require('./app.js');

const PORT = 3004;

// const app = express();

// connect to the listings database
mongoose.connect('mongodb://localhost/listings');

// app.use(express.json());

// use the route handler
// app.use('/', listingRouter);

// if (process.env.NODE_ENV !== 'test') {
//   app.listen(PORT, () => {
//     console.log(`more places module listening on http://localhost/${PORT}`);
//   });
// }

app.listen(PORT, () => {
  console.log(`more places module listening on http://localhost/${PORT}`);
});
