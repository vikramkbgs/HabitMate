const express = require("express");
const homeController = require('../controllers/home_controller');
const router = express.Router();

console.log(`router is working...`);
router.get('/',homeController.home);
router.get("/userHabits", homeController.userHabits);

module.exports = router;
