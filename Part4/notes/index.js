// index.js only imports the actual app from the app.js file and then starts the application.

const app = require('./app')
const http = require('http')
const config = require('./utils/config')

const server = http.createServer(app)

// Port info -----------
server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})