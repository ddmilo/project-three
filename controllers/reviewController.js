var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser');
var review = require('../models/review.model.js');


//GET
router.get('/', function indexAction(req, res) {
  Review.find(function(error, review){
      if(error) res.json({messsage:'could not find reviews'});
      res.json({review:review});
  }).select('-__v');
});

//POST
router.post('/', function createReviewAction(req, res){
  console.log('Created POST');
  console.log(req.body);

  var review = new Review(req.body);

  review.save(function(error){
        // if(error) res.json({messsage: 'Could not create review b/c:' + error});

    res.json({review:review});
  });
});
module.exports = router;
