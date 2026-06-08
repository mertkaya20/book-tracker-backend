/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("reviews").truncate();
  await knex("reviews").insert([
    { comment: "Amazing book, highly recommend!", user_id: 1, book_id: 1 },
    { comment: "Very deep and philosophical.", user_id: 2, book_id: 1 },
    { comment: "Life changing book!", user_id: 1, book_id: 2 },
    { comment: "A classic dystopian novel.", user_id: 3, book_id: 3 },
  ]);
};
