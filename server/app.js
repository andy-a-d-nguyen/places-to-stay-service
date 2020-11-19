/* eslint-disable */
const express = require('express');
const listingRouter = require('./routers/listing.js');
const listingController = require('../db/controllers/listing.js');

const app = express();

app.use(express.json());

// app.use(express.static('public/dist'));

app.use('/rooms/:id', express.static('public/dist'));

app.use(listingRouter); // if using middleware to listen to requests, do not put the path to listen to in app.use. That will be handled by the middleware

// app.use('/rooms/:id/places', listingRouter);

// app.use('/api/rooms/', express.static('public/dist'));

// app.get('/', (req, res) => {
//   res.status(200).send('success listening to a GET request to root');
// });

// app.get('/rooms/:id/places', (req, res) => {
//   const { id } = req.params;
//   // console.log(res);
//   listingController.findOne(id, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//       res.status(200).json(data);
//     }
//   });
// });

// app.use('/api/rooms/:id');

module.exports = app;
