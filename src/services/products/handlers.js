import models from "../../db/models/index.js";
const { Product, Review } = models;

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll({ include: Review });
    res.send(products);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(product);
  } catch (error) {
    next(error);
  }
};

const newProduct = async (req, res, next) => {
  try {
    const data = await Product.create(req.body);
    res.send(data);
  } catch (error) {
    next(error);
  }
};

const editProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Product.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
        returning: true,
      }
    );
    res.send(updatedProduct);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const rows = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send({ rows });
  } catch (error) {
    next(error);
  }
};

const productHandlers = {
  getProducts,
  getProductById,
  newProduct,
  editProduct,
  deleteProduct,
};

export default productHandlers
