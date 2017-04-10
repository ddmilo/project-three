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

//REVIEWS FOR SINGLE USER
router.get("/:username", function(req, res) {
  Review.find({ username: req.params.username})
    .exec(function(err, reviews) {
      console.log(reviews + "reviews for single user");
      res.json({reviews: reviews});
    });
});

//POST
router.post('/:beerId', function createReviewAction(req, res){

  var review = new Review({
    content: req.body.content,
    pairing: req.body.pairing,
    rating: req.body.rating,
    username: req.session.currentUser.username
  });

  review.save(function(error, review){
    console.log(review);
    res.json({review:review});
  })

    Beer.findById(req.params.beerId)
    .exec(function(err, beer){
      beer.reviews.push(review);
      beer.save();
    })
  });
module.exports = router;
