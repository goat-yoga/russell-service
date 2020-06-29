const mongoose = require('mongoose');
const { Review, getReviews } = require('../db/index.js');
const myDb = 'mongodb://localhost/reviews';

describe('fetching reviews from MongoDB', () => {

  beforeAll(async () => {
    await mongoose.connect(myDB, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });

  it('should fetch reviews from the database', async () => {
    let reviews;
    getReviews('licensed-fresh-car', () => {
      reviews = result;
    });
    console.log(result);
  })

});