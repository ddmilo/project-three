//REQUIREMENTS
var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser');
var Review = require('../models/review.model.js');
var Beer = require('../models/beer.model.js');

//NOT SURE WHAT THIS IS DOING, MAY NEED TO DELETE
router.get('/', function indexAction(req, res) {
  Review.find(function(error, review){
      if(error) res.json({messsage:'could not find reviews'});
      res.json({review:review});
  }).select('-__v');
});

//FIND ALL REVIEWS BY CURRENT USER
router.get("/:username", function(req, res) {
  Review.find({ username: req.params.username})
    .exec(function(err, reviews) {
      res.json({reviews: reviews});
    });
});

//EDIT REVIEW GET ROUTE
router.get("/:reviewId/edit", function(req, res) {
  Review.findById(req.params.reviewId)
    .exec(function(err, review) {
      res.json({review: review});
    });
});

//EDIT REVIEW PATCH ROUTE, NEEDS TO EDIT REVIEWS ON BEERS AS WELL
router.patch("/update/:reviewId", function(req, res) {
  Review.findById(req.params.reviewId)
    .exec(function(err, review) {
      review.content = req.body.content;
      review.rating = req.body.rating;
      review.pairing = req.body.pairing;
      review.save(function(review) {
        res.json({review: review});
      });
    });
});

//NEW REVIEW POST ROUTE
router.post('/:beerId', function createReviewAction(req, res){
  var review = new Review({
    content: req.body.content,
    pairing: req.body.pairing,
    rating: req.body.rating,
    username: req.session.currentUser.username
  });
  review.save(function(error, review){
    res.json({review:review});
  })
  Beer.findById(req.params.beerId)
    .exec(function(err, beer){
      beer.reviews.push(review);
      beer.save();
    })
  });

//EXPORTS
module.exports = router;
