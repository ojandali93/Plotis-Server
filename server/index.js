const server = require('./www/bin/app.js')

require('dotenv').config()

server.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is up and running on ${process.env.SERVER_PORT}`)
})