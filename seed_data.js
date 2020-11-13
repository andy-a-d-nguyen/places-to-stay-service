const faker = require('faker');

module.exports = {
  listingID: Math.floor(Math.random() * 10000) + 1,
  pictureURL: 'https://loremflickr.com/320/240/interior',
  locationName: faker.random.words(),
  score: Math.floor(Math.random() * 100),
  reviewCount: Math.floor(Math.random() * 200),
  roomType: faker.address.streetSuffix(),
  bedCount: Math.floor(Math.random() * 4) + 1,
  costPerNight: Math.floor(Math.random() * 300) + 50,
};
