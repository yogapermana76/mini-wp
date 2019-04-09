const router = require('express').Router()
const ArticleController = require('../controllers/articleController')

router.get('/', ArticleController.findAllArticle)
router.post('/', ArticleController.addArticle)
router.delete('/:id', ArticleController.deleteArticle)
router.put('/', ArticleController.updateArticle)

module.exports = router