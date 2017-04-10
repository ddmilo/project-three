var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser') //parses information from POST
// var methodOverride = require('method-override') //used to manipulate POST
var User = require('../models/user.model.js');
var methodOverride = require('method-override')

// GET
router.get('/', function indexAction(req, res) {
  User.find(function(error, auth){
    if(error) res.json({message:''});

    res.json({User: User});
  }).select('-__v');
});

// router.get('/signUp', function(req, res){
//   response.json({auth: auth});
// })

//POST create user
router.post('/', function createAction(req, res){
  console.log('user created');
  console.log('body:', request.body)

  var User = new User(req.body); 


  user.save(function(error){
  	if(error) res.json({message: 'could not create because of:' + error})

  		res.json({User: User});
  });

});





module.exports = router;
