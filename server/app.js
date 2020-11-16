const express = require('express');
const listingRouter = require('./routers/listing.js');
// const listingController = require('../db/controllers/listing.js');

const app = express();

app.use(express.json());

app.use(express.static('public/dist'));

app.use('/', listingRouter);

// app.get('/', (req, res) => {
//   res.status(200).send('success listening to a GET request to root');
// });

// app.get('/api/rooms/:id', (req, res) => {
//   const { id } = req.params;
//   listingController.findOne(id, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.status(200).json(data);
//     }
//   });
// });

module.exports = app;
