const faker = require('faker');

const generateProductName = faker.commerce.productName;
// const generateRating = Math.ceil(Math.random() * 5);
const generateTitle = faker.lorem.words;
const generateBody = faker.lorem.sentence;
const generateName = faker.name.firstName;

// create an array of 100 products to review
const generateProducts = () => {
  var results = [];

  for (let i = 0; i < 100; i++) {
    let productName = generateProductName().split(' ');

    for (let i = 0; i < productName.length; i++) {
      productName[i] = productName[i][0].toLowerCase() + productName[i].slice(1);
    }

    let productId = productName.join('-');
    console.log(productId);
    // results.push(generateProductName());
  }

  return results;
};

const products = generateProducts();

// generate 15 reviews for each product
const generateReviews = (product) => {
  let results = [];

  for (let i = 0; i < 15; i++) {
    let review = {
      _id: i + 1,
      rating: Math.ceil(Math.random() * 5),
      title: generateTitle(),
      body: generateBody(),
      name: generateName()
    }

    results.push(review);
  }

  return results;
}

// create data objects
const generateData = products => (
  products.map((product, i) => (
    {
      _id: i,
      product: product,
      reviews: generateReviews()
    }
  ))
);


module.exports = generateData(products);