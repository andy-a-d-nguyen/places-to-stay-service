const express = require('express');
const mongoose = require('mongoose');
const placeController = require('../db/controllers/place.js').PlaceModel; // refactor to move into its own component

const PORT = 3004;

const app = express();

mongoose.connect('mongodb://localhost/places');

app.use(express.json());

app.get('/api/rooms/id', (req, res) => {
  placeController.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`more places module listening on http://localhost/${PORT}`);
});