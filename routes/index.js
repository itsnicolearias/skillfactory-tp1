const { Router } = require('express')
const products = require('./products')
const users = require('./users')
const carts = require('./carts')

const router = Router()

router.use('/products', products)
router.use('/users', users)
router.use('/carts', carts)

module.exports = router;