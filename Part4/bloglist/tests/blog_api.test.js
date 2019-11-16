const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const helper = require('./test_helper')

beforeEach(async () => {
  await Blog.deleteMany({})
  const blogObjects = helper.initialBlogs
    .map(blog => new Blog(blog))
  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
})

describe('Blog Tests', () => {
  test('content type is returned as JSON', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('length of entries returned', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body.length).toBe(3)
  })

  test('IDs are defined', async () => {
    const response = await api.get('/api/blogs')
    const identifier = response.body.map(r => r.id)
    //expect(identifier[0]).toBeDefined()
    for (let i = 0; i < identifier.length; i++) {
      expect(identifier[i]).toBeDefined()
    }
  })
  test.skip('valid blog can be added ', async () => {
    const newBlog = {
      title: 'Generic Test Vlog',
      author:'Barbie',
      url: 'https://en.wikipedia.org/',
      likes: 99
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    // Confirm length is right
    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd.length).toBe(helper.initialBlogs.length + 1)

    // Confirm new title data is in db entry
    const titles = blogsAtEnd.map(n => n.title)
    expect(titles).toContain(newBlog.title)
  })

  test('a blog can be deleted', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const blogToDelete = blogsAtStart[0]

    await api
      .delete(`/api/blogs/${blogToDelete.id}`)
      .expect(204)

    const blogsAtEnd = await helper.blogsInDb()

    expect(blogsAtEnd.length).toBe(
      helper.initialBlogs.length - 1
    )

    const ids = blogsAtEnd.map(r => r.id)
    expect(ids).not.toContain(blogToDelete.id)
  })

  test.skip('blog missing likes corrected and added', async () => {
    const newBlog = {
      title: 'Generic Test Vlog',
      author:'Barbie',
      url: 'https://en.wikipedia.org/',
    }

    if (newBlog.likes == undefined){
      newBlog.likes = '0'}

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(200)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd.length).toBe(helper.initialBlogs.length + 1)
  })

  test.skip('blog missing title and URL not added', async () => {
    const newBlog = {
      url: 'https://en.wikipedia.org/',
      likes: 86
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(400)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd.length).toBe(helper.initialBlogs.length)
  })
})

afterAll(() => {
  mongoose.connection.close()
})