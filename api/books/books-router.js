const Books = require("./books-model");
const mw = require("./books-middleware");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const books = await Books.getAll();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", mw.validateBookId, (req, res) => {
  res.status(200).json(req.book);
});

router.post("/", mw.validateBook, async (req, res, next) => {
  try {
    const book = await Books.addBook(req.body);
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", mw.validateBookId, async (req, res, next) => {
  try {
    const { id } = req.params;
    await Books.deleteBook(id);
    const deletedBook = req.book;
    res.status(200).json(deletedBook);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
