const router = require('express').Router()
const UserController = require('../controllers/userController')

router.post('/', UserController.register)
router.get('/', UserController.findAll)
router.post('/login', UserController.login)
router.post('/login/google', UserController.signInGoogle)

module.exports = router