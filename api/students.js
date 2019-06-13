const router = require("express").Router();
const bodyParser = require('body-parser');
router.get("/", (req, res, next) => {
  res.json("ALL OF THE STUDENTS!!!");

});

router.get("/:id", (req, res, next) => {
  res.json("A PARTICULAR STUDENT");
});

// router.post;
//student create
// router.put;
// router.delete;

module.exports = router;
