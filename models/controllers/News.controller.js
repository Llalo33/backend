const { model, models } = require('mongoose')
const News = require('../News.model')

const newsControlls = {
    postNews: async(req, res) => {
        try {
            const news = await News.create({
                title: req.body.title,
                text: req.body.text,
                categoryId: req.body.categoryId
            })
            res.json(news)
        } catch (error) {
            res.json(error)
        }
    },
    deleteNews: async (req, res) => {
        try {
            const news = await News.findByIdAndRemove(req.params.id)
            res.json(news)
        } catch (error) {
            res.json(error)
        }
    },
    patchNews: async(req, res) => {
        try {
            const news = await News.findByIdAndUpdate(req.params.id , {
                title: req.body.title,
                text: req.body.text,
                categoryId: req.body.categoryId
            })
            res.json(news)
        } catch (error) {
            res.json(error)
        }
    },
    getAllNews: async (req, res) => {
        try {
            const news = await News.find()
            res.json(news)
        } catch (error) {
            res.json(error)
        }
    },
    getSpecificNews: async (req, res) => {
        try {
            const news = await News.find(req.params.id)
            res.json(news)
        } catch (error) {
            res,json(error)
        }
    },
    getAllNewsFromTheCategory: async (req, res) => {
        try {
            const news = await News.find({categoryId: req.params.id})
            res.json(news)
        } catch (error) {
            res.json(news)
        }
    }
};

module.exports = newsControlls;