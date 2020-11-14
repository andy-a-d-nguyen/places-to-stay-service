const mongoose = require('mongoose');
const faker = require('faker');
const { PlaceModel } = require('./db/controllers/place.js');
const { ListingModel } = require('./db/controllers/listing.js');

mongoose.connect('mongodb://localhost/listings');

const seedDb = () => {
  const listings = [];
  let i = 0;
  while (i < 100) {
    const newListing = new ListingModel({
      listingID: i,
      listingName: faker.address.streetName(),
      morePlacesID: [],
    });
    let j = 0;
    while (j < 12) {
      const newPlace = new PlaceModel({
        listingID: Math.floor(Math.random() * 100),
        pictureURL: 'https://loremflickr.com/320/240/interior',
        locationName: faker.address.streetName(),
        liked: false,
        score: parseFloat(((Math.random() * 5) + 1).toFixed(2)),
        reviewCount: Math.floor(Math.random() * 200),
        roomType: faker.commerce.productName(),
        roomName: faker.commerce.productName(),
        bedCount: Math.floor(Math.random() * 2) + 1,
        costPerNight: Math.floor(Math.random() * 200) + 30,
      });
      newListing.morePlacesID.push(newPlace);
      j += 1;
    }
    listings.push(newListing);
    i += 1;
  }
  ListingModel.create(listings, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      mongoose.disconnect();
    }
  });
};

seedDb();
