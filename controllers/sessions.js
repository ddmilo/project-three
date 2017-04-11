//REQUIREMENTS
var express = require('express');
var router = express.Router();
var User = require('../models/user.model.js');
var authHelpers = require('../helpers/auth.js');

//NOT SURE WHAT THIS IS DOING, MAY NEED TO DELETE
router.get('/login', function(req, res) {
  res.json('api/sessions/login.');
});

//GETS CURRENT SESSION USER
router.get("/current", function(req, res) {
	console.log(req.session.currentUser);
	res.json(req.session.currentUser);
});

//LOGS A USER IN AND REDIRECTS TO BEER INDEX
router.post('/login', authHelpers.loginUser, function(req, res){
  console.log(req.session.currentUser);
  res.redirect('/#!/beer');
});

//LOGOUT USER
router.get('/logout', function(req, res){
  console.log('session destroyed')
  req.session.destroy(function(){
    res.redirect('/#!/home');
  });
});

//UPDATE SESSION USER
router.post("/updateLogin", authHelpers.update, function(req, res) {
  res.json("success");
});

//EXPORTS
module.exports = router;
