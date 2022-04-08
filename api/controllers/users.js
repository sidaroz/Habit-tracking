const User = require("../models/user");

async function createUser(req, res) {
  try {
    // const salt = await bcrypt.genSalt();
    // const hashed = await bcrypt.hash(req.body.password_set, salt)
    await User.createUser({ ...req.body });
    res.status(201).json({ msg: "User created!" });
  } catch (error) {
    res.status(500).json({ err: "User cannot be created" });
  }
}

async function findByUsername(req, res) {
  try {
    const user = await User.findByUsername(req.body.username);
    if (!user) {
      throw new Error("No user with this email");
    } else if (
      user.username === req.body.username &&
      user.password_set === req.body.password_set
    ) {
      res.status(200).json({ msg: "User signed in" });
    }
  } catch (error) {
    res.status(401).json({ err: "User could not be logged in" });
  }
}
module.exports = { createUser, findByUsername };
