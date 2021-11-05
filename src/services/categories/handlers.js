import models from "../../db/models/index.js";

const { Category } = models

const getCategories = async (req, res, next) => {
    try {
        const categories = await Category.findAll()
        res.send(categories)
    } catch (error) {
        next(error)
    }
}

const createNewCategory = async (req, res, next) => {
    try {
        const newCategory = await Category.create(req.body)
        res.send(newCategory)
    } catch (error) {
        next(error)
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        const rows = await Category.destroy({
            where: {
                id: {
                    id: req.params.id
                }
            }
        })
    } catch (error) {
        next(error)
    }
}

const categoryHandlers = {
    getCategories,
    deleteCategory,
    createNewCategory
}

export default categoryHandlers