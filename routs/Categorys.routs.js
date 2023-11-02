const express = require('express')
const categoryControlles = require('../models/controllers/Category.controller')


const app = express()

app.post('/category/' , categoryControlles.postCategory)

app.get('/category' , categoryControlles.getCategory)

app.delete('/category/:id' , categoryControlles.deleteCategory)

module.exports = app

