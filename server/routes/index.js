const router = require('express').Router()
const articleRoute = require('./article')
const userRoute = require('./user')

router.get('/', (req, res) => {
  console.log('masuk')
})

router.use('/articles', articleRoute)
router.use('/users', userRoute)

module.exports = router