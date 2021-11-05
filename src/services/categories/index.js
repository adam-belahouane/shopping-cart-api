import express from "express"
import categoryHandlers from "./handlers.js"

const categoryRouter = express.Router()

categoryRouter.route("/")
.get(categoryHandlers.getCategories)
.post(categoryHandlers.createNewCategory)

categoryRouter.route("/:id")
.delete(categoryHandlers.deleteCategory)

export default categoryRouter