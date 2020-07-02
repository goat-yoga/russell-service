const mongoose = require('mongoose');
const myDb = 'mongodb://localhost/reviews';
mongoose.connect(myDb, { useNewUrlParser: true }, () => console.log('Database Connected!'));

let reviewSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    dropDups: true,
    index: true
  },
  product: String,
  productId: String,
  reviews: [{
    id: Number,
    rating: Number,
    title: String,
    body: String,
    name: String
  }]
});

let Review = mongoose.model('Review', reviewSchema);


module.exports = {
  insertData: data => {
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
  },

  getReviews: (cb) => {
    var random = Math.ceil(Math.random() * 100);
    Review.find({ id: random }, (err, result) => {
      if (err) {
        cb(err);
      } else {
        cb(null, result);
      }
    });
  }
};
