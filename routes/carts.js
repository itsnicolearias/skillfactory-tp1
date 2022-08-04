const { Router } = require('express');
const { getAllCarts, getBigCarts, getCartById, getUserCart } = require('../controllers/carts');

const router = Router()

router.get('/', getAllCarts)
router.get('/:id', getCartById)
router.get('/user/:id', getUserCart)
router.get('/bigcarts', getBigCarts)

module.exports = router;