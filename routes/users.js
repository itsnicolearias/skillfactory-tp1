const { Router } = require('express');
const { getAllUsers, getUserById, getFirstUsers } = require('../controllers/users');

const router = Router()

router.get('/', getAllUsers)
router.get('/firsts', getFirstUsers)
router.get('/:id', getUserById)

module.exports = router;