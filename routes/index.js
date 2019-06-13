const router = require("express").Router();
const studentsRouter = require("./students");
//subrouters
const campusesRouter = require("./campuses");
const bodyParser = require('body-parser');

router.use("/students", studentsRouter);
router.use("/campuses", campusesRouter);

router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});


module.exports = router;
