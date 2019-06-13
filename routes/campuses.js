const router = require("express").Router();
const bodyParser = require('body-parser');
const { Campus } = require('../database/models');


router.use(bodyParser.json());

router.get("/", (req, res, next) => {
  {
    Campus.findAll()
      .then(campus => res.json(campus))
      .catch(next);
  }
 // const allCampus =  Campus.findAll();
 // console.log(allCampus);

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
