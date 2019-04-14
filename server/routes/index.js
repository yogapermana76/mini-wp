const router = require('express').Router()
const articleRoute = require('./article')
const userRoute = require('./user')

router.use('/articles', articleRoute)
router.use('/users', userRoute)

module.exports = router