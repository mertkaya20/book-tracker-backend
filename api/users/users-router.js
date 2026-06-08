const Users = require("./users-model");
const mw = require("./users-middleware");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await Users.getAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", mw.validateId, (req, res, next) => {
  res.status(200).json(req.user);
});

router.post("/", mw.validateUser, async (req, res, next) => {
  try {
    const user = await Users.addUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", mw.validateId, async (req, res, next) => {
  try {
    const { id } = req.params;
    await Users.deleteUser(id);

    const deletedUser = req.user;
    res.status(200).json(deletedUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
