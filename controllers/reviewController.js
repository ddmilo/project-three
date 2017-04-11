//REQUIREMENTS
var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser');
var Review = require('../models/review.model.js');
var Beer = require('../models/beer.model.js');

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

//EDIT REVIEW PATCH ROUTE
router.patch("/update/:reviewId", function(req, res) {
  Review.findById(req.params.reviewId)
    .exec(function(err, review) {
      review.content = req.body.content;
      review.rating = req.body.rating;
      review.pairing = req.body.pairing;
      review.save();
    });
  Beer.find({})
    .exec(function(err, beers) {
      beers.forEach(function(beer) {
        for (var i = 0; i < beer.reviews.length; i++) {
          if (beer.reviews[i]._id == req.params.reviewId) {
            console.log("INSIDE IF STATEMENT");
            beer.reviews[i].content = req.body.content;
            beer.reviews[i].rating =  req.body.rating;
            beer.reviews[i].pairing = req.body.pairing;
            beer.save();
          }
        }
      });
      res.json({});
    });
});

//NEW REVIEW POST ROUTE
router.post('/:beerId', function createReviewAction(req, res){
  var review = new Review({
    content: req.body.content,
    pairing: req.body.pairing,
    rating: req.body.rating,
<<<<<<< HEAD


    username: req.session.currentUser.username

=======
    username: req.session.currentUser.username
>>>>>>> master
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
