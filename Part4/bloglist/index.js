require('dotenv').config()
// eslint-disable-next-line no-unused-vars
const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)
// eslint-disable-next-line no-undef
const mongoUrl = process.env.MONGODB_URI
mongoose.connect(mongoUrl, { useNewUrlParser: true })

app.use(cors())
app.use(bodyParser.json())

// HTTP Requests
app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.get('/api/blogs/:id', (request, response) => {
  Blog
    .findById(request.params.id)
    .then(blog => {
      if (blog){
        response.json(blog.toJSON())
      }
      else{
        response.status(404).end()
      }
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

// Port Info
// eslint-disable-next-line no-undef
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})