const axios = require('axios')
const { stringify } = require('flatted')
const { response } = require('../server/www/bin/app')


require('dotenv').config()

const propertiesOptions = {
  method: 'GET',
  url: 'https://zillow-com1.p.rapidapi.com/propertyExtendedSearch',
  params: {location: 'sunnyvale, ca', home_type: 'Houses'},
  headers: {'X-RapidAPI-Key': process.env.API_KEY, 'X-RapidAPI-Host': process.env.API_HOST}
}

const propertyOptions = {
  method: 'GET',
  url: 'https://zillow-com1.p.rapidapi.com/property',
  params: {zpid: '2080998890'},
  headers: {'X-RapidAPI-Key': process.env.API_KEY, 'X-RapidAPI-Host': process.env.API_HOST}
}

const propertiesController = {
  get: (req, res) => {
    axios.request(propertiesOptions)
      .then((response) => {
        console.log(response.data)
        res.send(response.data).status(200)
      })
      .then((error) => {
        console.error(error)
      })
  }
}

const propertyController = {
  get: (req, res) => {
    let propertyId = req.params.id
    propertyOptions.params.zpid = propertyId
    axios.request(propertyOptions)
      .then((response) => {
        console.log(response.data)
        res.send(response.data).status(200)
      })
      .then((error) => {
        console.error(error)
      })
  }
}

module.exports = { propertiesController, propertyController }