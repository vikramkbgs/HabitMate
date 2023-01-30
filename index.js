const express = require("express");
const app = express();
const expressLayouts = require('express-ejs-layouts');


app.use(express.static('./assests'));

const port = 8001;
// use express router
app.use("/", require("./routes"));

// setup view engine 

app.set('view engine','ejs');
app.set('views', './views');

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
