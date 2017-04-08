var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser') //parses information from POST
// var methodOverride = require('method-override') //used to manipulate POST
var Auth = require('../models/user.model.js');

// GET
router.get('/', function indexAction(request, response) {
  auth.find(function(error, auth) {
    if(error) response.json({message:''});

    response.json({auth: auth});
  }).select('-__v');
});






module.exports = router;
