require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')
const cors = require('cors')
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${process.env.username}:${process.env.password}@cluster0-y1tro.mongodb.net/mini-wp?retryWrites=true`, { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database connected')
});

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', routes)

app.listen(port, () => {
  console.log(`listen on port ${port}`)
})