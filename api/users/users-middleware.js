const Users = require("./users-model");

const validateId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Users.getById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const validateUser = (req, res, next) => {
  try {
    const { username, email } = req.body;

    if (!username || !email) {
      return res.status(400).json({ message: "Username, email needed" });
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { validateId, validateUser };
