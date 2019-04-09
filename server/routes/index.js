const router = require('express').Router()
const articleRoute = require('./article')
const userRoute = require('./user')
const loginRoute = require('./login')

router.get('/', (req, res) => {
  console.log('masuk')
})

router.use('/articles', articleRoute)
router.use('/users', userRoute)
router.use('/login', loginRoute)

module.exports = router