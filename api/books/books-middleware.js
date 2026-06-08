const Books = require("./books-model");

const validateBookId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Books.getById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    req.book = book;
    next();
  } catch (error) {
    next(error);
  }
};

const validateBook = (req, res, next) => {
  // book_name, author, genre
  try {
    const { book_name, author, genre } = req.body;
    if (!book_name || !author || !genre) {
      return res
        .status(400)
        .json({ message: "Book name, author, genre needed" });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { validateBook, validateBookId };
