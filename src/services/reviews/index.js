import express from "express";
import reviewHandlers from "./handlers.js";


const reviewsRouter = express.Router();

reviewsRouter.route("/")
.post(reviewHandlers.newReview)
.get(reviewHandlers.getReviews)

reviewsRouter.route("/:id")
.get(reviewHandlers.getReviewById)
.put(reviewHandlers.editReview)
.delete(reviewHandlers.deleteReview)

export default reviewsRouter