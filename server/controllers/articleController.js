const Article = require('../models/article')

class ArticleController {

  static addArticle(req, res) {
    Article.create({
      title: req.body.title,
      content: req.body.content,
      featured_image: req.file.gcsUrl,
      author: req.body.author
    })
      .then(article => {
        res.status(201).json(article)
      })
      .catch(err => {
        res.status(500).json(err.message)
      })
  }

  static findAllArticle(req, res) {
    Article.find({
      author: req.params.id
    })
      .populate('author')
      .then(articles => {
        res.status(200).json(articles)
      })
      .catch(err => {
        res.status(500).json(err.message)
      })
  }

  static deleteArticle(req, res) {
    Article.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).json('successfull deleted')
      })
      .catch(err => {
        res.status(err).json(err.message)
      })
  }

  static updateArticle(req, res) {
    Article.findByIdAndUpdate(req.params.id, req.body)
      .then(article => {
        res.status(200).json(article)
      })
      .catch(err => {
        res.status(500).json(err.message)
      })
  }

}

module.exports = ArticleController