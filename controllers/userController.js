var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var review = require('../models/user.model.js');


// POST
router.post('/', function createAction(req, res) {
  console.log('Created New User ');
  console.log(req.body);

  var user = new User(req.body);

  userNew.save(function(error) {
    // if(error) res.json({messsage: 'Could not ceate new beer b/c:' + error});

    res.json({user:user});
  });
});
module.exports = router;
