const Article = require('../models/article')

module.exports = {
  authorization(req, res, next) {
    let userId = req.authenticated.id
    let articleId = req.params.id

    Article
      .findById(articleId)
        .then(article => {
          if(article.author == userId) {
            next()
          } else {
            res.status(401).json({ message: 'You are not authorized' })
          }
        })
        .catch(err => {
          res.status(401).json(err.message)
        })
  }
}