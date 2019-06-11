const express = require("express");
const app = express();
const apiRouter = require("./api");
const bodyParser = require('body-parser');

app.use("/api", apiRouter);
app.use(bodyParser.json());



app.listen(3000, () => {
  console.log("Hello world!!!");
});
