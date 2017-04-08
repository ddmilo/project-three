var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser') //parses information from POST
// var methodOverride = require('method-override') //used to manipulate POST
var Auth = require('../models/user.model.js');

// GET
router.get('/', function indexAction(req, res) {
  auth.find(function(error, auth) {
    if(error) response.json({message:''});

    response.json({auth: auth});
  }).select('-__v');
});

router.get('/signUp', function(req, res){
  response.json({auth: auth});
})

//POST
router.post('/', function createAction(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

var newUser = {
  email: req.body.email,
  userId:req.body.userId,
  password:req.body.password
}

  User.save(function(error) {
    if(error) response.json({messsage: 'Could not create  b/c:' + error});

    response.json({auth: auth});
  });
});





module.exports = router;
