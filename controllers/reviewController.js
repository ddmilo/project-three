var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser');
var Review = require('../models/review.model.js');
var Beer = require('../models/beer.model.js');


//GET
router.get('/', function indexAction(req, res) {
  Review.find(function(error, review){
      if(error) res.json({messsage:'could not find reviews'});
      res.json({review:review});
  }).select('-__v');
});

//POST
router.post('/:beerId', function createReviewAction(req, res){
  console.log('Created POST');
  console.log(req.body);

  var review = new Review({
    content: req.body.content,
    pairing: req.body.pairing
  });

  review.save(function(error, review){

    res.json({review:review});
  })

    Beer.findById(req.params.beerId)
    .exec(function(err, beer){
      beer.reviews.push(review);
      beer.save();
      console.log(beer);
    })
  });
module.exports = router;
