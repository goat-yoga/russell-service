const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const data = require('./seed.js');

let mockupSchema = new mongoose.Schema({
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
  })
}

insertData(data);