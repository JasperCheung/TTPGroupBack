const router = require("express").Router();
const studentsRouter = require("./students");
const campusesRouter = require("./campuses");
const bodyParser = require('body-parser');

router.use("/students", studentsRouter);
router.use("/campuses", campusesRouter);
module.exports = router;
