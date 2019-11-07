const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const blogLikes = blogs.map(b => b.likes)
  const reducer = (sum, item) => {
    return sum + item
  }
  return blogLikes.reduce(reducer, 0)
}

module.exports = {
  dummy,
  totalLikes
}