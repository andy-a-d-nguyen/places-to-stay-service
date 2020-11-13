const mongoose = require('mongoose');

const listingSchema = mongoose.Schema({
  listingID: { type: Number, unique: true },
  listingName: String,
  morePlacesID1: Number,
  morePlacesID2: Number,
  morePlacesID3: Number,
  morePlacesID4: Number,
  morePlacesID5: Number,
  morePlacesID6: Number,
  morePlacesID7: Number,
  morePlacesID8: Number,
  morePlacesID9: Number,
  morePlacesID10: Number,
  morePlacesID11: Number,
  morePlacesID12: Number,
});

const ListingModel = mongoose.model('Listing', listingSchema);

module.exports.ListingModel = ListingModel;
