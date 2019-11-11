// doesn't print anything if in test mode
const info = (...params) => {
  // eslint-disable-next-line no-undef
  if (process.env.NODE_ENV !== 'test') {
    console.log(...params)
  }
}

// intended for error logging & will print in test mode
const error = (...params) => {
  console.error(...params)
}

module.exports = {
  info, error
}
