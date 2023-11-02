const express = require('express')
const newsControlls = require('../models/controllers/News.controller')

const app = express()

app.post('/news/', newsControlls.postNews)

app.delete('/news/:id', newsControlls.deleteNews)

app.patch('/news/:id', newsControlls.patchNews)

app.get('/news/:id', newsControlls.getSpecificNews)

app.get('/news', newsControlls.getAllNews)

app.get('/news/:id', newsControlls.getAllNewsFromTheCategory)

module.exports = app