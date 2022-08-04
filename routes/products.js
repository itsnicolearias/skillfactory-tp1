const { Router } = require('express');
const { getAllProducts, getAllCategories, getByPrices, getExpensiveProducts, getProductById, getCategoryByName } = require('../controllers/products');

const router = Router()

router.get('/', getAllProducts)
router.get('/by/categories', getAllCategories)
router.get('/:id', getProductById)
router.get('/category/:name', getCategoryByName)
router.get('/prices', getByPrices)
router.get('/expensive', getExpensiveProducts)

module.exports = router;