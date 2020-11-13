const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
  listingID: { type: Number, unique: true },
  pictureURL: String,
  locationName: String,
  score: Number,
  reviewCount: Number,
  roomType: String,
  bedCount: Number,
  costPerNight: Number,
});

const PlaceModel = mongoose.model('Place', placeSchema);

module.exports.PlaceModel = PlaceModel;
