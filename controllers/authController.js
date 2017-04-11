//NOT SURE IF WE ARE USING THIS FILE AT ALL
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//REQUIREMENTS
var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser') 
var Auth = require('../models/user.model.js');


router.get('/', function indexAction(req, res) {
  console.log('hello');
  Auth.find(function(error, auth){
    if(error) response.json({message:''});
    response.json({auth: auth});
  }).select('-__v');
});

router.get('/newUser', function(req, res){
  response.json({auth: auth});
})

router.post('/', function createAccountAction(req, res){
  console.log('HELLLOOOO user created');

})

module.exports = router;
