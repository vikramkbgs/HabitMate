const express = require("express");
const app = express();
const expressLayouts = require('express-ejs-layouts');


// configuring database to todo app
const db = require("./config/mongoose");
// importing collection from models
const Habit = require("./models/habits");

app.use(express.static('./assests'));

const port = 8001;
// use express router
app.use("/", require("./routes"));

// setup view engine 

app.set('view engine','ejs');
app.set('views', './views');
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// const newHabit = new Habit({
//   nameOfHabit: "Meditation",
//   daily: true,
// });
// const flag = 1;

// if(flag==1)
// newHabit.done.push({ date: new Date('2023-09-2')});
// if(flag==3)
// newHabit.notDone.push({ date: new Date() });

// newHabit.save((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Habit added successfully");
//   }
// });

// const query = { _id: "63d7e3b53eaaa0fe6510f2af" };
// const update = { $push: { done: { date: new Date("2023-09-16") } } };

// Habit.updateOne(query, update, function (error) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log("Successfully updated the habit.");
//   }
// });

// Habit.findOne({ _id: "63d7e3b53eaaa0fe6510f2af" }, function (err, habit) {
//   if (err) return console.error(err);
//   const dates = habit.done.map((doneItem) => doneItem.date);
//   console.log(dates);
//   const habitDates = habit.done.map((doneItem) => doneItem.date);

//   let maxLength = 0;
//   let currentLength = 1;

//   for (let i = 0; i < habitDates.length - 1; i++) {
//     const currentDate = habitDates[i];
//     const nextDate = habitDates[i + 1];
//     const difference = nextDate - currentDate;
//     if (difference === 24 * 60 * 60 * 1000) {
//       // 24 hours in milliseconds
//       currentLength++;
//     } else {
//       maxLength = Math.max(maxLength, currentLength);
//       currentLength = 1;
//     }
//   }

//   maxLength = Math.max(maxLength, currentLength);
//   console.log(
//     `The longest continuous sequence of dates is ${maxLength} days long.`
//   );

// });
// const habit1 = new Habit({
//   nameOfHabit: "Meditation",
//   daily: true,
//   done: [
//     { date: new Date("2022-01-01") },
//     { date: new Date("2022-01-02") },
//     { date: new Date("2022-01-03") },
//   ],
//   notDone: [{ date: new Date("2022-01-04") }],
//   startDate: new Date("2022-01-01"),
// });

// const habit2 = new Habit({
//   nameOfHabit: "Reading",
//   daily: false,
//   done: [{ date: new Date("2022-01-01") }, { date: new Date("2022-01-03") }],
//   notDone: [{ date: new Date("2022-01-02") }, { date: new Date("2022-01-04") }],
//   startDate: new Date("2022-01-01"),
// });

// const habit3 = new Habit({
//   nameOfHabit: "Running",
//   daily: true,
//   done: [
//     { date: new Date("2022-01-01") },
//     { date: new Date("2022-01-02") },
//     { date: new Date("2022-01-03") },
//     { date: new Date("2022-01-04") },
//   ],
//   notDone: [],
//   startDate: new Date("2022-01-01"),
// });

// const habit4 = new Habit({
//   nameOfHabit: "Yoga",
//   daily: false,
//   done: [{ date: new Date("2022-01-03") }, { date: new Date("2022-01-04") }],
//   notDone: [{ date: new Date("2022-01-01") }, { date: new Date("2022-01-02") }],
//   startDate: new Date("2022-01-01"),
// });

// const habits = [habit1, habit2, habit3, habit4];

// habits.forEach(async (habit) => {
//   try {
//     await habit.save();
//   } catch (err) {
//     console.error(err);
//   }
// });




app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
