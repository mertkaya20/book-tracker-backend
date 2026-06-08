const express = require("express");
const booksRouter = require("./books/books-router");
const usersRouter = require("./users/users-router");
const reviewsRouter = require("./reviews/reviews-router");

const server = express();

server.use(express.json());
server.use("/api/books", booksRouter);
server.use("/api/users", usersRouter);
server.use("/api/reviews", reviewsRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Sunucu hatası",
  });
});

module.exports = server;
