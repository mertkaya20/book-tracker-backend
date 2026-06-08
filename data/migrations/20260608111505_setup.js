/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments("id");
      tbl.string("username").notNullable().unique();
      tbl.string("email").notNullable().unique();
    })
    .createTable("books", (tbl) => {
      tbl.increments("id");
      tbl.string("book_name").notNullable();
      tbl.string("author").notNullable();
      tbl.string("genre").notNullable();
    })
    .createTable("reviews", (tbl) => {
      tbl.increments("id");
      tbl.string("comment");
      tbl
        .integer("user_id")
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
      tbl
        .integer("book_id")
        .notNullable()
        .references("id")
        .inTable("books")
        .onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("reviews")
    .dropTableIfExists("books")
    .dropTableIfExists("users");
};
