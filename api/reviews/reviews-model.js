const db = require("../../data/db-config");

const getAll = () => {
  return db("reviews");
};

const getById = (id) => {
  return db("reviews").where("id", id).first();
};

const getByBookId = (book_id) => {
  return db("reviews as r")
    .join("users as u", "r.user_id", "u.id")
    .join("books as b", "r.book_id", "b.id")
    .where("r.book_id", book_id)
    .select("r.comment", "u.username", "b.book_name");
};

const getByReviewId = (id) => {
  return db("reviews as r")
    .join("users as u", "r.user_id", "u.id")
    .join("books as b", "r.book_id", "b.id")
    .where("r.id", id)
    .select("r.comment", "u.username", "b.book_name")
    .first();
};

const addReview = async (comment) => {
  const [id] = await db("reviews").insert(comment);

  return getByReviewId(id);
};

const deleteReview = async (id) => {
  const user = await getById(id);
  await db("reviews").where("id", id).delete();
  return user;
};

module.exports = { getAll, getById, getByBookId, addReview, deleteReview };
