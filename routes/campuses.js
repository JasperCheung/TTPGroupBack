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

 router.get('/:id', async (req, res, next) => {
  try {
    //  SELECT * FROM students WHERE id = 'req.params.id'
    let campus = await Campus.findByPk(req.params.id);
    if (campus) {
      res.json(campus);
    } else {
      res.status(404).send('Campus not found');
    }
  } catch (error) {
    next(error);
  }
});


router.post("/submit", (req,res,next) => {
  console.log(req.body);
  res.json(req.body);
});


// router.post;
// router.put;
// router.delete;

module.exports = router;
