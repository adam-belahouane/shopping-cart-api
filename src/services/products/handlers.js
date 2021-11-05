import models from "../../db/models/index.js";
import sequelize from "../../db/index.js";
const { Product, Review, User, Category, ProductCategory } = models;

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll({ 
      include: [{
        model: Category, 
        where: {
          ...(req.query.category && {
            name: [req.query.category]
          })

        },
        through: { attributes: [] } }, 
        Review],
        ...(req.query.size && req.query.page && {
          limit: req.query.size,
          offset: parseInt(req.query.size * req.query.page)
        })
    // order: [
    //     ['price', 'DESC'],
     });
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
    const { categories, ...rest } = req.body
    const data = await Product.create(rest);
    const valuesToInsert = categories.map((category) => ({
      categoryId: category,
      productId:  data.id
    }))
    await ProductCategory.bulkCreate(valuesToInsert)
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
