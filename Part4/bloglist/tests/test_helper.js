const Blog = require('../models/blog')
const User = require('../models/user')

// Data to reset our testing DB when we run tests
const initialBlogs = [
  {
    title: 'Magical Blog',
    author:'Matilda Wormwood',
    url: 'https://en.wikipedia.org/wiki/Matilda_(1996_film)',
    likes: 56  },
  {
    title: 'Testers Blog ',
    author:'Matilda Honey',
    url: 'https://en.wikipedia.org/wiki/Matilda_(1996_film)',
    likes: 256  },
  {
    title: 'Ultimate Guide to Japan',
    author:'Katie Diederichs',
    url: 'https://www.twowanderingsoles.com/blog/ultimate-japan-travel-guide-everything-you-need-to-know-for-your-first-visit',
    likes: 353  },
]

// Gets the database blogs as JSON
const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialBlogs,
  blogsInDb,
  usersInDb
}