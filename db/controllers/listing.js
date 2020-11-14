const mongoose = require('mongoose');
const { placeSchema } = require('./place.js');

const listingSchema = mongoose.Schema({
  listingID: { type: Number, unique: true },
  listingName: String,
  morePlacesID: [placeSchema], // an array of URLs or objects
});
// 100 unique listings, each rendering a unique carousel
// make moreplacesID an array of URLS or objects
// redo seed data
const ListingModel = mongoose.model('Listing', listingSchema);

module.exports = {
  ListingModel,
};
