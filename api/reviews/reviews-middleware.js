const Reviews = require("./reviews-model");

const validateReviewId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const review = await Reviews.getById(id);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    req.review = review;
    next();
  } catch (error) {
    next(error);
  }
};

const validateReview = (req, res, next) => {
  try {
    const { comment, user_id, book_id } = req.body;

    if (
      !comment ||
      !user_id ||
      typeof user_id !== "number" ||
      !book_id ||
      typeof book_id !== "number"
    ) {
      return res
        .status(400)
        .json({ message: "comment, user_id, book_id needed" });
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { validateReviewId, validateReview };
