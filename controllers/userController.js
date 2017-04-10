var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var User = require('../models/user.model.js');
var methodOverride = require('method-override')

// GET
router.get('/', function indexAction(req, res) {
  User.find(function(error, user){
    if(error) res.json({message:''});

    res.json({Users: User});
  }).select('-__v');
});


//POST create user
router.post('/', function createAction(req, res){
  console.log('User created');
  console.log('body:', req.body);

  var user = new User(req.body)



  user.save(function(error){
  		res.json({user:user});
  });

});





module.exports = router;
