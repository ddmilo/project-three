var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser') //parses information from POST
var User = require('../models/user.model.js');
var methodOverride = require('method-override')

// GET
router.get('/', function indexAction(req, res) {
  User.find(function(error, auth){
    if(error) res.json({message:''});

    res.json({Users: User});
  }).select('-__v');
});


//POST create user
router.post('/', function createAction(req, res){
  console.log('user created');
  console.log('body:', request.body)

  var User = new User(req.body); 


  user.save(function(error){
  	if(error) res.json({message: 'could not create because of:' + error})

  		res.redirect('/api/auth/login');
  });

});





module.exports = router;
