const express = require("express");
const router = express.Router();
const habitController = require("../controllers/habits");
const {createUser, login, verifyToken} = require('../controllers/users')

router.post("/", habitController.createHabit);
router.get("/:email", habitController.filterHabitsByEmail);
router.delete("/entry/:id", habitController.deleteHabit);
router.get("/entry/:id", habitController.findHabitById);
router.patch("/entry/:id", habitController.increaseRepCounter)

module.exports = router;
