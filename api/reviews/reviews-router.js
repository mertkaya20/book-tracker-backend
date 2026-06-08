const Reviews = require("./reviews-model");
const mw = require("./reviews-middleware");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const comments = await Reviews.getAll();
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
});

router.get("/book/:book_id", async (req, res, next) => {
  try {
    const { book_id } = req.params;
    const comment = await Reviews.getByBookId(book_id);
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
});

router.post("/", mw.validateReview, async (req, res, next) => {
  try {
    const comment = await Reviews.addReview(req.body);
    res.status(201).json(comment);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", mw.validateReviewId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const review = req.review;
    await Reviews.deleteReview(id);
    res.status(200).json(review);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
