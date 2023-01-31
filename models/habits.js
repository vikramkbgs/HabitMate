const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const habitSchema = new Schema({
  nameOfHabit: {
    type: String,
    required: true,
  },
  daily: {
    type: Boolean,
    required: true,
  },
  done: [
    {
      date: {
        type: Date,
        default: null,
      },
    },
  ],
  notDone: [
    {
      date: {
        type: Date,
        default: null,
      },
    },
  ],
  startDate: {
    type: Date,
    required: true,
  },
});



const Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;
