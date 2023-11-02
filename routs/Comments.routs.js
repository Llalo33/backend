const express = require('express')
const commentsControlles = require('../models/controllers/Comment.for.news.controller')

const app = express()

app.post('/comment/:id', commentsControlles.postCommentSpecificNews)

app.delete('/comment/:id', commentsControlles.deleteComment)

app.get('/comment/:id', commentsControlles.getAllCommentsSpecificNews)

module.exports = app