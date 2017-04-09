var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser');
var review = require('../models/review.model.js');


//GET
router.get('/', function indexAction(req, res) {
  Review.find(function(error, review){
      if(error) response.json({messsage:'could not find reviews'});
      response.json({review:review});
  }).select('-__v');
});

//POST
router.post('/', function createReviewAction(req, res){
  console.log('Created POST');
  console.log(req.body);

  var review = new Review(req.body);

  review.save(function(error){
        if(error) response.json({messsage: 'Could not create review b/c:' + error});

    response.json({review:review});
  });
});
module.exports = router;
