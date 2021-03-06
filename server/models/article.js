const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: {
    type: String,
    required: [true, 'please fill title']
  },
  content: {
    type: String,
    required: [true, 'please fill content']
  },
  featured_image: String,
  created_at: {
    type: Date,
    default: new Date()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
})

const Article = mongoose.model('article', articleSchema)

module.exports = Article