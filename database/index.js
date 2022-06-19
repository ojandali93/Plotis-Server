const pg = require('pg')
const seq = require('sequelize')

require('dotenv').config()

const database = new seq(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  'host':'127.0.0.1',
  'dialect':'postgres'
})

database
  .sync()
  .then(() => {
    console.log('Database has been successfully syced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = database