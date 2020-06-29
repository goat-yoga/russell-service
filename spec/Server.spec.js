const request = require('supertest');
const server = require('../server/index.js');

describe('GET /api/licensed-fresh-car', () => {

  test('it should respond with a product', async () => {
    const response = await request(server).get('/api/licensed-fresh-car;');
    expect(response.body.product).toEqual('Licensed Fresh Car');
    expect(response.body.reviews[0].rating).toBe(4);
    expect(response.body.reviews[0].title).toBe("neque eum ut");
    expect(response.body.reviews[0].body).toBe("Numquam quasi ratione accusamus.");
    expect(response.body.reviews[0].name).toBe("Anahi");
  });
});