import express from "express";
import productHandlers from "./handlers.js";


const productsRouter = express.Router();

productsRouter.route("/")
.post(productHandlers.newProduct)
.get(productHandlers.getProducts)

productsRouter.route("/:id")
.get(productHandlers.getProductById)
.put(productHandlers.editProduct)
.delete(productHandlers.deleteProduct)

export default productsRouter