const User = require("../models/user");
const bcrypt = require("bcryptjs");

async function createUser(req, res) {
  console.log(req.body)
  try {
    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(req.body.password_set, salt);
    const newUser = await User.createUser({ ...req.body, password_set: hashed });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ err: "User cannot be created" });
  }
}

async function findByEmail(req, res) {
  try {
    // console.log(req.body.password_set)
    let user = await User.findByEmail(req.body.email);
    console.log(user)
    if (!user) { 
      throw new Error("No user with this email")
    } 
    const passwordCheck = await bcrypt.compare(req.body.password_set, user.password_set);    
    // console.log(passwordCheck)
    if (passwordCheck) {
      res.status(201).json(user);
    } else {
        throw new Error("User could not be authenticated")
    }
  } catch (error) {
    res.status(401).json({ error: "User could not be logged in" });
  }
}
module.exports = { createUser, findByEmail };