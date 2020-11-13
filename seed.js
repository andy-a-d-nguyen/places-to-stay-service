const mongoose = require('mongoose');
const mockData = require('./seed_data.js');
const Places = require('./db/controllers/place.js').placeModel;

mongoose.connect('mongodb://localhost/places');

const seedDb = (data) => {
  let i = 0;
  while (i <= 100) {
    const place = {
      listingID: data.listingID,
      pictureURL: data.pictureURL,
      locationName: data.locationName,
      score: data.score,
      reviewCount: data.reviewCount,
      roomType: data.roomType,
      bedCount: data.bedCount,
      costPerNight: data.costPerNight,
    };
    Places.create(place, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('success inserting places');
      }
    });
    i += 1;
  }
};

seedDb(mockData);
