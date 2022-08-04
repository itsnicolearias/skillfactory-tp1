const { Router } = require('express');
const { getAllUsers, getUserById, getFirstUsers } = require('../controllers/users');

const router = Router()

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.get('/first', getFirstUsers)

module.exports = router;