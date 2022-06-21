const router = require('express').Router()
const { propertiesController, propertyController } = require('../controllers/propertyController.js')

router.route('/properties') 
  .get(propertiesController.get)

router.route('/property/:id')
  .get(propertyController.get)

module.exports = router