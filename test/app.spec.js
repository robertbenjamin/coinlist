const request = require('supertest');
const app = require('../app');

describe('App', () => {
  test('returns a 404 for invalid route', (done) => {
    request(app).get('/invalid').then((res) => {
      expect(res.statusCode).toBe(404);
      done();
    });
  });
});
