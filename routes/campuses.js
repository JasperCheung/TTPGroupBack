const router = require("express").Router();
const bodyParser = require('body-parser');


router.use(bodyParser.json());

router.get("/", (req, res, next) => {
  res.json(req.body);
});

router.get("/:id", (req, res, next) => {
  res.json(`this is campuses ${req.params.id}`);
});

router.post("/submit", (req,res,next) => {
  console.log(req.body);
  res.json(req.body);
});


// router.post;
// router.put;
// router.delete;

module.exports = router;
