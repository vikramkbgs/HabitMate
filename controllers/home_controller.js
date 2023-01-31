const Habit = require("../models/habits");

module.exports.home = function (req, res) {
  return res.render("home");
};

module.exports.userHabits = function (req, res) {
  Habit.find({}, (err, habits) => {
    if (err) {
      return res.status(500).send(err);
    }
    console.log("habits:", habits);
    return res.render("layout", { habits });
  });
};
