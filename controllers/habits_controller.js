const Habit = require('../models/habit');

module.exports.load = function (request, response) {
    Habit.find({})
        .then(habits => {
            return response.render('home', { habit_list: habits });
        })
        .catch(err => {
            console.log("Error in fetching habits from DB", err);
            // Handle the error appropriately
        });
};

module.exports.add = function (request, response) {
    request.body.record_tracker = {};
    request.body.user = "AnyUser";
    console.log(request.body);
    Habit.create(request.body)
        .then(newhabit => {
            console.log("******New habit******")
            console.log(newhabit);
            return response.redirect("back");
        })
        .catch(err => {
            console.log("error in creating a habit", err);
            // Handle the error appropriately
        });
};

module.exports.delete = function (request, response) {
    let id = request.query.id;
    Habit.findByIdAndDelete(id)
        .then(() => {
            return response.redirect('back');
        })
        .catch(err => {
            console.log("error in deletion", err);
            // Handle the error appropriately
        });
};

module.exports.viewhabit = function (request, response) {
    let id = request.query.id;
    Habit.findById(id)
        .then(habit => {
            response.render("habit.ejs", { "habit": habit });
        })
        .catch(err => {
            console.log("error in finding habit", err);
            // Handle the error appropriately
        });
};

module.exports.fetchhabit = function (request, response) {
    let id = request.query.id;
    Habit.findById(id)
        .then(habit => {
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(habit));
        })
        .catch(err => {
            console.log("error in finding habit", err);
            // Handle the error appropriately
        });
};

module.exports.updateDates = function (request, response) {
    let id = request.query.id;
    let date = request.query.date;
    let value = request.query.value;
    console.log(date, value, id);

    Habit.findById(id)
        .then(habit => {
            if (!habit) {
                throw new Error("Habit not found");
            }

            const r_t = habit.record_tracker;
            if (date in r_t) {
                r_t[date] = value;
            } else {
                r_t.set(date, value);
            }
            console.log(r_t);
            return Habit.updateOne({ "_id": id }, { $set: { record_tracker: r_t } });
        })
        .then(() => {
            console.log("Updated!");
            return response.end('{ "status":"success"}');
        })
        .catch(err => {
            console.log("Error in updating habit", err);
            return response.end('{ "status":"failed"}');
        });
};
