const Category = require('../Category.model')

const categoryControlles = {
    postCategory: async (req, res) => {
        try {
            const category = await Category.create({
                name: req.body.name
            });
            res.json(category)
        } catch (error) {
            res.json(error)
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const category = await Category.findByIdAndDelete(req.params.id)
            res.json(category)
        } catch (error) {
            res.json(error)
        }
    },
    getCategory: async (req, res) => {
        try {
            const category = await Category.find()
            res.json(category)
        } catch (error) {
            res.json(error)
        }
    }
};

module.exports = categoryControlles;