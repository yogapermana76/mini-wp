const router = require('express').Router()
const ArticleController = require('../controllers/articleController')
const { authenticate } = require('../middlewares/authenticate')
const { authorization } = require('../middlewares/authorization')
const Multer = require('multer') // npm install multer
const gcsMiddlewares = require('../middlewares/sendUploadToGCS')

const multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Maximum file size is 10MB
  },
})

router.use(authenticate)

router.get('/:id', ArticleController.findAllArticle)
router.post('/', multer.single('featured_image'), gcsMiddlewares.sendUploadToGCS, ArticleController.addArticle)
router.delete('/:id', authorization, ArticleController.deleteArticle)
router.put('/:id', authorization, multer.single('featured_image'), gcsMiddlewares.sendUploadToGCS, ArticleController.updateArticle)

module.exports = router