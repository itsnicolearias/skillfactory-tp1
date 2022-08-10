const { Router } = require('express');
const { getAllCarts, getBigCarts, getCartById, getUserCart } = require('../controllers/carts');

const router = Router()

router.get('/', getAllCarts)
router.get('/bigcarts', getBigCarts)
router.get('/user/:id', getUserCart)
router.get('/:id', getCartById)



module.exports = router;