const express = require("express");
const app = express();

const port = 8001;
// use express router
app.use("/", require("./routes"));
app.set('view engine','ejs');

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
