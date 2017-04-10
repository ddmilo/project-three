var express = require('express');
var router = express.Router();
var User = require('../models/user.model.js');
var authHelpers = require('');

router.get('/', (req, res) {
  console.log('sessions on');
  res.json({message: 'Invalid Username or Password'});
});


router.post('/login', authHelpers.loginUser, (req, res){
  if(req.error) {
    console.log('sessions error');
    res.json({message: 'Invalid Username or Password'});
  }
  else {
    console.log('Sessions greenlit');
    res.redirect('/api/beer/')
  }
});

  router.delete('/', (req, res){
    req.session.destroy((){
      //insert redirect after session destroyed

  });
});

module.exports = router;
