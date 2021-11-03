import models from "../../db/models/index.js";
const { Product, Review } = models;

const getReviews = async (req, res, next) => {
    try {
      const reviews = await Review.findAll({ include: Product });
      res.send(reviews);
    } catch (error) {
      next(error);
    }
  };
  
  const getReviewById = async (req, res, next) => {
    try {
      const review = await Review.findByPk(req.params.id);
      res.send(review);
    } catch (error) {
      next(error);
    }
  };
  
  const newReview = async (req, res, next) => {
    try {
      const data = await Review.create(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  };
  
  const editReview = async (req, res, next) => {
    try {
      const updatedReview = await Review.update(
        { ...req.body },
        {
          where: {
            id: req.params.id,
          },
          returning: true,
        }
      );
      res.send(updatedReview);
    } catch (error) {
      next(error);
    }
  };
  
  const deleteReview = async (req, res, next) => {
    try {
      const rows = await Review.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send({ rows });
    } catch (error) {
      next(error);
    }
  };
  
  const reviewHandlers = {
    getReviews,
    getReviewById,
    newReview,
    editReview,
    deleteReview,
  };
  
  export default reviewHandlers