//REQUIREMENTS
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('../models/user.model.js');
var methodOverride = require('method-override');
var authHelper = require('../helpers/auth.js');
var Review = require("../models/review.model.js");
var Beer = require("../models/beer.model.js");

//NOT SURE WHAT THIS ROUTE IS DOING, MAY NEED TO DELETE
router.get('/', function indexAction(req, res) {
  User.find(function(error, user){
    if(error) res.json({message:''});

    res.json({Users: user});
  }).select('-__v');
});

//CREATE NEW USER POST ROUTE
router.post('/', authHelper.createSecure, function createAction(req, res){
  var user = new User({
    email: req.body.email,
    password_digest: res.hashedPassword,
    username: req.body.username
  });
  user.save(function(error){
  		res.json({user:user});
  });
});

//EDIT USER AND THEIR REVIEWS, NEED TO REFACTOR IF TIME ALLOWS
router.patch("/:username", function(req, res) {
  User.find({username: req.params.username})
    .exec(function(err, users) {
      users.forEach(function(user) {
        user.username = req.body.username;
        user.email = req.body.email;
        user.save();
      });
    });
  Review.find({username: req.params.username})
    .exec(function(err, reviews) {
      reviews.forEach(function(review){
        review.username = req.body.username;
        review.save(function(review) {
        });
      });     
    });
  Beer.find({})
    .exec(function(err, beers) {
      beers.forEach(function(beer) {
        for (var i = 0; i < beer.reviews.length; i++) {
          if (beer.reviews[i].username === req.params.username) {
            beer.reviews[i].username = req.body.username;
            beer.save();
          }
        }
      });
      res.json({user: req.body});
    });
});

//DELETE USER
router.delete("/delete/:userId", function(req, res) {
  User.findByIdAndRemove(req.params.userId)
    .exec(function (err, user) {
      res.json({user: user});
    });
});

//EXPORTS
module.exports = router;
