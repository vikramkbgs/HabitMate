const Habit = require('../models/habit');


// This function finds each and every habit in the list and renders it.
module.exports.load = async function(req, res) {
    try {
        const habits = await Habit.find({}).exec();
        return res.render('layouts', { habit_list: habits });
    } catch (err) {
        console.error("Error fetching data from Database:", err);
        return res.status(500).send("Error fetching data from database");
    }
}

// This function helps in adding a habit in the list.
module.exports.add = function (req, res) {
    // Set default values for habit
    const habitData = {
        user: req.body.user || "AnyUser",
        habit_name: req.body.habit_name || "Unnamed Habit",
        record_tracker: req.body.record_tracker || {}
    };

    // Create new habit
    Habit.create(habitData, function (err, newHabit) {
        if (err) {
            console.error("Error creating habit:", err);
            return res.status(500).send("Error creating habit");
        } else {
            console.log("New habit created:", newHabit);
            return res.redirect("back");
        }
    });
}
