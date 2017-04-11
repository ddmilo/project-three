var express = require('express');
router = express.Router();
var User = require('../models/user.model.js');
var authHelpers = require('../helpers/auth.js');

//LOGIN
router.get('/login', function(req, res) {
  res.json('api/sessions/login.');
});

router.get("/current", function(req, res) {
	console.log(req.session.currentUser);
	res.json(req.session.currentUser);
});


router.post('/login', authHelpers.loginUser, function(req, res){
  // console.log('sessions check');
  console.log(req.session.currentUser);
  res.redirect('/#!/beer');
});

router.get('/logout', function(req, res){
  console.log('session destroyed')
  req.session.destroy(function(){
    res.redirect('/#!/home');
  });
});

router.post("/updateLogin", authHelpers.update, function(req, res) {
  res.json("success");
});


module.exports = router;
