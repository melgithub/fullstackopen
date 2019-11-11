const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

test('notes are returned as json', async () => {
  await api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('there are four notes', async () => {
  const response = await api.get('/api/notes')
  expect(response.body.length).toBe(2)
})

test('the first note is about HTML', async () => {
  const response = await api.get('/api/notes')
  expect(response.body[0].content).toBe('HTML is easy')
})

test('the second note is about JS', async () => {
  const response = await api.get('/api/notes')
  expect(response.body[1].content).toBe('Browser can execute only Javascript')
})

afterAll(() => {
  mongoose.connection.close()
})