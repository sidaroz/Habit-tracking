const supertest = require('supertest');
const server = require('../server');

const api = supertest(server);

test('GET / should return json message with code 200', async () => {
  const res = await api.get('/');

  expect(res.statusCode).toEqual(200);
  expect(res.type).toEqual('application/json');
  expect(res.body.message).toEqual('Welcome');
});
