const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
  listingID: { type: Number, unique: false },
  pictureURL: String,
  locationName: String,
  liked: Boolean,
  score: Number,
  reviewCount: Number,
  roomType: String,
  roomName: String,
  bedCount: Number,
  costPerNight: Number,
});

const PlaceModel = mongoose.model('Place', placeSchema);

module.exports = {
  placeSchema,
  PlaceModel,
};
