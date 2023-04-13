const express = require('express');
const router = express.Router()
const controller = require('../controllers/productControllers')

router.get('/:productId', controller.fetchSpecificProducts)

router.get('/', controller.fetchAllProducts)

router.post('/', controller.createProduct)

router.delete('/:productId', controller.deleteProducts)

router.patch('/:productId', controller.updateProduct)

module.exports = router;