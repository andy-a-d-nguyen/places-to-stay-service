/* eslint-disable */
const { MongoClient } = require('mongodb');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server/app.js');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a doc into collection', async () => {
    const listings = db.collection('listings');

    const mockListing = {
      listingID: 1,
      listingName: 'mockListing',
      morePlacesID: [],
    };
    await listings.insertOne(mockListing);

    const insertedListing = await listings.findOne({ listingID: 1 });
    expect(insertedListing).toEqual(mockListing);
  });
});

// describe('Test the root path', () => {
//   test('It should respond to a GET request', () => {
//     return request(app)
//       .get('/')
//       .then((res) => {
//         expect(res.statusCode).toBe(200);
//       });
//   });
// });

