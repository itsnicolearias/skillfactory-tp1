const { Router } = require('express');
const { getAllProducts, getAllCategories, getByPrices, getExpensiveProducts, getProductById, getCategoryByName } = require('../controllers/products');

const router = Router()
router.get('/expensive', getExpensiveProducts)
router.get('/prices', getByPrices)
router.get('/', getAllProducts)
router.get('/by/categories', getAllCategories)
router.get('/:id', getProductById)
router.get('/by/category/:name', getCategoryByName)



module.exports = router;