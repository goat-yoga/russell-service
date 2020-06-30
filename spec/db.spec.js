const {MongoClient} = require('mongodb');
const myDb = 'mongodb://localhost/reviews';
const regeneratorRuntime = require("regenerator-runtime");

describe('retrieving reviews from database', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(myDb, {
      useNewUrlParser: true,
    });
    db = await connection.db(global.reviews);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should fetch product reviews', async () => {
    const reviews = db.collection('reviews');

    const product = await reviews.findOne({id: 1});

    expect(product.reviews).toHaveLength(13);
  });
});