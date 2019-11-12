const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

describe('Blog Tests', () => {
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

  test('ID', async () => {
    const response = await api.get('/api/blogs')
    const identifier = response.body.map(r => r.id)
    //expect(identifier[0]).toBeDefined()
    for (let i = 0; i < identifier.length; i++) {
      expect(identifier[i]).toBeDefined()
    }
  })
})

afterAll(() => {
  mongoose.connection.close()
})