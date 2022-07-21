const supertest = require('supertest');
const server = require('../server');
const db = require('../db_config/config');

const api = supertest(server);

const testUser = {
  username: 'test',
  email: 'test@gmail.com',
  password_set: 'test123',
};

describe('/users routes tests', () => {
  beforeEach(async () => {
    await db.query('TRUNCATE users CASCADE;');
  });

  afterAll(async () => {
    await db.end();
  });

  test('POST /users/register should successfully register user', async () => {
    const res = await api.post('/users/register').send(testUser);

    expect(res.statusCode).toEqual(201);
    expect(res.type).toEqual('application/json');

    expect(res.body.email).toEqual(testUser.email);
    expect(res.body.username).toEqual(testUser.username);
    expect(res.body.password_set === testUser.password_set).toEqual(false);
  });

  test('POST /users/register should return error when password is missing', async () => {
    const res = await api.post('/users/register').send({
      username: testUser.username,
      email: testUser.email,
    });

    expect(res.statusCode).toEqual(500);
    expect(res.type).toEqual('application/json');
    expect(res.body.err).toEqual('User cannot be created');
  });

  test('POST /users/login should successfully login a registered user', async () => {
    await api.post('/users/register').send(testUser);

    const res = await api.post('/users/login').send({
      email: testUser.email,
      password_set: testUser.password_set,
    });

    expect(res.statusCode).toEqual(200);
    expect(res.type).toEqual('application/json');

    expect(res.body.user.email).toEqual(testUser.email);
    expect(res.body.user.username).toEqual(testUser.username);
    expect(res.body.token.includes('Bearer')).toBe(true);
    expect(res.body.success).toBe(true);
  });

  test('POST /users/login should return 401 if unknown email', async () => {
    const res = await api.post('/users/login').send({
      email: 'random@gmail.com',
      password_set: 'test123',
    });

    expect(res.statusCode).toEqual(401);
    expect(res.type).toEqual('application/json');
    expect(res.body.error).toEqual('User could not be logged in');
  });

  test('POST /users/login should return 401 if incorrect password', async () => {
    await api.post('/users/register').send(testUser);

    const res = await api.post('/users/login').send({
      email: testUser.email,
      password_set: 'password',
    });

    expect(res.statusCode).toEqual(401);
    expect(res.type).toEqual('application/json');
    expect(res.body.error).toEqual('User could not be logged in');
  });
});
