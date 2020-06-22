const mongoose = require('mongoose');
const myDb = 'mongodb://localhost/reviews';
mongoose.connect(myDb, { useNewUrlParser: true }, () => console.log('Database Connected!'));
// const data = require('./seed.js');

let reviewSchema = new mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
    dropDups: true,
    index: true
  },
  product: String,
  reviews: [{
    _id: Number,
    rating: Number,
    title: String,
    body: String,
    name: String
  }]
});

let Review = mongoose.model('Review', reviewSchema);

let insertData = data => {
  let reviews = [];

  for (let instance of data) {
    let review = new Review(instance);
    reviews.push(review);
  }

  Review.insertMany(reviews, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log('seeding successful');
    }
  });
};

module.exports = {
  getReviews: (product, cb) => {
    Review.find({ product: product }, (err, result) => {
      if (err) {
        cb(err);
      } else {
        cb(null, result);
      }
    });
  }
};
