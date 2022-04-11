const express = require("express");
const router = express.Router();
const habitController = require("../controllers/habits");

router.post("/", habitController.createHabit);
router.get("/:email", habitController.filterHabitsByEmail);
router.delete("/entry/:id", habitController.deleteHabit);
router.get("/entry/:id", habitController.findHabitById);

module.exports = router;
