/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").truncate();
  await knex("users").insert([
    { username: "mertk", email: "mertkaya.codes@gmail.com" },
    { username: "bugrabb", email: "aeb1806@gmail.com" },
    { username: "mehmet", email: "mehmet@gmail.com" },
  ]);
};
