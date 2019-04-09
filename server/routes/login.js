const router = require('express').Router()
const UserController = require('../controllers/userController')

router.post('/', UserController.login)
router.post('/google', UserController.signInGoogle)

module.exports = router