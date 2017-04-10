var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser') //parses information from POST
var User = require('../models/user.model.js');
var methodOverride = require('method-override')
var authHelper = require('../helpers/auth.js');

// GET
router.get('/', function indexAction(req, res) {
  User.find(function(error, user){
    if(error) res.json({message:''});

    res.json({Users: user});
  }).select('-__v');
});


//POST create user
router.post('/', authHelper.createSecure, function createAction(req, res){
  console.log('User created');
  console.log('body:', req.body);

  var user = new User({
    email: req.body.email,
    password_digest: res.hashedPassword,
    username: req.body.username

  });



  user.save(function(error){
  		res.json({user:user});
  });

});





module.exports = router;
