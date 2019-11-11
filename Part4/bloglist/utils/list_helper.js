var _ = require('lodash')
// When npm test is called, this file takes the passed
// parameter and puts them through a set of logic

const dummy = () => 1

const mostBlogs = (blogs) => {
  const authorCount = _.map(_.countBy(blogs, 'author'), (blogs, author) => ({ // First, make new obj with author (property) and count (occurences) as KVPs
    author: author, // Second, maps our new object into a desired format
    blogs: blogs
  }))
  return _.maxBy(authorCount, 'blogs') // Last, returns the object with the max. count for 'blogs'
}

const totalLikes = (blogs) => blogs
  .reduce((total, item) => total + item.likes, 0) // Reduce by summing up all likes in array items with initial value set at 0

const favoriteBlog = (blogs) => blogs
  .sort((value1, value2) => value2.likes - value1.likes) // First, sort objects numerically by likes
  .map(blog => ({ // Then, map each array item to an object as below
    title: blog.title,
    author: blog.author,
    likes: blog.likes,
  }))[0] // Take the topmost one

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}