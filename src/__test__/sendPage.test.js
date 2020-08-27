const app = require('../server/index');
const supertest = require('supertest');
const request = supertest(app);


describe('Endpoint test', () => {
  it('/test', async (done) => {
    const response = await request.get('/test');
    expect(response.status).toBe(200);
    done();
  });
});
