const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");


router.post("/register", userController.createUser);
router.get("/login", userController.findByUsername);

module.exports = router;
