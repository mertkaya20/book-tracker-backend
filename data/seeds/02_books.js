/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("books").truncate();
  await knex("books").insert([
    {
      book_name: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      genre: "Popular Science, History",
    },
    { book_name: "Crime and Punishment", author: "Dostoevsky", genre: "Novel" },
    { book_name: "The Alchemist", author: "Paulo Coelho", genre: "Novel" },
  ]);
};
