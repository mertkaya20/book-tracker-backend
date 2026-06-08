const db = require("../../data/db-config");

const getAll = () => {
  return db("users");
};

const getById = (id) => {
  return db("users").where("id", id).first();
};

const addUser = async (user) => {
  const [id] = await db("users").insert(user);

  return getById(id);
};

const deleteUser = async (id) => {
  const user = await getById(id);
  await db("users").where("id", id).delete();

  return user;
};

module.exports = { getAll, getById, addUser, deleteUser };
