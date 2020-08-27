const app = require('../server/index');
const supertest = require('supertest');
const request = supertest(app);


describe('Try request to get page', () => {
  it('Get request to /', async (done) => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    done();
  });
});
