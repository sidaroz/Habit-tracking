const supertest = require('supertest');
const server = require('../server');
const db = require('../db_config/config');
const { verifyToken } = require('../controllers/users');

const api = supertest(server);

const testHabit = {
  email: 'test@gmail.com',
  habit_id: 'test',
  repetition: 1,
  cur_repetition: 2,
  streak: 3,
  frequency: 'testing',
};

describe('/habits routes tests', () => {
  afterEach(async () => {
    await db.query('TRUNCATE habits CASCADE;');
  });

  afterAll(async () => {
    await db.end();
  });

  test('POST /habits should successfully create a habit', async () => {
    const res = await api.post('/habits').send(testHabit);
    const { email, habit_id, repetition, cur_repetition, streak, frequency } =
      res.body.habit;

    expect(res.statusCode).toEqual(201);
    expect(res.type).toEqual('application/json');
    expect({
      email,
      habit_id,
      repetition,
      cur_repetition,
      streak,
      frequency,
    }).toEqual(testHabit);
  });

  test('POST /habits should return error with incorrect request body', async () => {
    const res = await api.post('/habits').send({
      email: 'test@gmail.com',
    });

    expect(res.statusCode).toEqual(500);
    expect(res.type).toEqual('application/json');
    expect(res.body.msg).toEqual('Habit could not be created!');
  });

  test('GET /habits/:email should return habit with the same email', async () => {
    const createHabitRes = await api.post('/habits').send(testHabit);
    const res = await api.get(`/habits/${testHabit.email}`);

    const createdHabit = createHabitRes.body.habit;

    expect(res.statusCode).toEqual(200);
    expect(res.type).toEqual('application/json');
    expect(res.body[0]).toEqual(createdHabit);
  });

  test('GET /habits/:email should return empty array when no habits are found', async () => {
    const res = await api.get('/habits/random@gmail.com');

    expect(res.statusCode).toEqual(200);
    expect(res.type).toEqual('application/json');
    expect(res.body.length).toEqual(0);
  });

  test('GET /habits/entry/:id should return habit with same id as created', async () => {
    const createHabitRes = await api.post('/habits').send(testHabit);
    const createdHabit = createHabitRes.body.habit;

    const res = await api.get(`/habits/entry/${createdHabit.id}`);

    expect(res.statusCode).toEqual(200);
    expect(res.type).toEqual('application/json');
    expect(res.body).toEqual(createdHabit);
  });

  test('GET /habits/entry/:id should return error when no habit is found', async () => {
    const res = await api.get('/habits/entry/99');

    expect(res.statusCode).toEqual(500);
    expect(res.type).toEqual('application/json');
    expect(res.body.msg).toEqual('Could not find habit by this id');
  });

  test('DELETE /habits/entry/:id should successfully delete habit', async () => {
    const createHabitRes = await api.post('/habits').send(testHabit);
    const createdHabit = createHabitRes.body.habit;
    const res = await api.delete(`/habits/entry/${createdHabit.id}`);

    expect(res.statusCode).toEqual(204);
  });
  test('PATCH /habits/entry/:id should increase rep counter by 1', async () => {
    const createHabitRes = await api.post('/habits').send(testHabit);
    const createdHabit = createHabitRes.body.habit;
    const res = await api.patch(`/habits/entry/${createdHabit.id}`);
    
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Counter succesfully increased');
    });
    
    test('PATCH /habits/entry/:id with unknown id should return error', async () => {
    const res = await api.patch('/habits/entry/99');
    
    expect(res.statusCode).toEqual(500);
    expect(res.body.msg).toEqual('loser');
    });
});
