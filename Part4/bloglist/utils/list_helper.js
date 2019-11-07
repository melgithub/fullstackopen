// When npm test is called, this file takes the passed
// parameter and puts them through a set of logic

const dummy = () => {
  return 1
}

const totalLikes = (blogs) => {
  const blogLikes = blogs.map(b => b.likes)
  const reducer = (sum, item) => {
    return sum + item
  }
  return blogLikes.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  const blogLikes = blogs.map(b => b.likes)
  return Math.max(...blogLikes)
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}