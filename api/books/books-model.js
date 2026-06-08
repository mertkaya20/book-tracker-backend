const db = require("../../data/db-config");

const getAll = () => {
  return db("books");
};

const getById = (id) => {
  return db("books").where("id", id).first();
};

const addBook = async (book) => {
  const [id] = await db("books").insert(book);

  return getById(id);
};

const deleteBook = async (id) => {
  const book = await getById(id);
  await db("books").where("id", id).delete();
  return book;
};

module.exports = { getAll, getById, addBook, deleteBook };
