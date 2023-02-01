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

module.exports.habitsCalender = function (req, res) {
  var weeks = [];
  var currentDate = new Date(2022, 11, 1);


  while (currentDate.getMonth() === 11) {
    var week = [];
    for (var i = 0; i < 7; i++) {
      week.push({ date: new Date(currentDate) });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    weeks.push(week);
  }
      console.log(weeks);
      return res.render('calender');
};
