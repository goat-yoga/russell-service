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

let Reviews = mongoose.model('Reviews', mockupSchema);