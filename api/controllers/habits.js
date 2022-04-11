const Habit = require("../models/habit");

async function createHabit(req, res) {
  try {
    console.log(typeof +req.body.repetition);
    const habit = await Habit.createHabit(req.body);
    console.log(habit);
    res.status(201).send({ habit });
  } catch (err) {
    res.status(500).json({ msg: "Habit could not be created!" });
  }
}

async function filterHabitsByEmail(req, res) {
  try {
    const habit = await Habit.filterHabitsByEmail(req.params);
    res.status(200).send(habit);
  } catch (err) {
    res.status(500).json({ msg: "Could not find habit for this user" });
  }
}

async function findHabitById(req, res) {
  try {
    const habit = await Habit.findHabitById(req.params);
    res.status(200).send(habit);
  } catch (err) {
    res.status(500).json({ msg: "Could not find habit by this id" });
  }
}
async function deleteHabit(req, res) {
  try {
    const habit = await Habit.deleteHabit(req.params.id);
    res.status(204).send("Deleted this habit");
  } catch (err) {
    res.status(500).send("loser");
  }
}

module.exports = {
  createHabit,
  filterHabitsByEmail,
  findHabitById,
  deleteHabit,
};
