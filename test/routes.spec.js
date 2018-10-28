const request = require('supertest');
const app = require('../app');

describe('Coins route', () => {
  test('returns all coins', (done) => {
    request(app).get('/coins').then((res) => {
      const { body } = res;
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(body)).toBe(true);
      done();
    });
  });

  test('returns a single coin by id', (done) => {
    request(app).get('/coins/ethereum').then((res) => {
      const { body } = res;
      expect(res.statusCode).toBe(200);
      expect(Object.keys(body).sort()).toEqual(['id', 'symbol', 'name'].sort());
      done();
    });
  });
});
