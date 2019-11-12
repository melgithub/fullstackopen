const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

test('testing content type is returned as JSON', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('length of entries returned', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body.length).toBe(2)
})

afterAll(() => {
  mongoose.connection.close()
})