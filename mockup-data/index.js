const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useNewUrlParser: true }, () => console.log('Test Database Connected!'));
const data = require('./seed.js');

let mockupSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    dropDups: true,
    index: true
  },
  product: String,
  reviews: [{
    id: Number,
    rating: Number,
    title: String,
    body: String,
    name: String
  }]
});

let Review = mongoose.model('Review', mockupSchema);

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

insertData(data);

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