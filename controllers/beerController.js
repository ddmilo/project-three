var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var Beer = require('../models/beer.model.js');

// GET
router.get('/', function indexAction(req, res) {
  Beer.find(function(error, beer) {
    if(error) res.json({message: 'Could not find any beer'});

    res.json({beer: beer});
  }).select('-__v');
});

// POST
router.post('/', function createAction(req, res) {
  console.log('BEER POST');
  console.log(req.body);

  var beer = new Beer(req.body);

  beer.save(function(error) {
    // if(error) res.json({messsage: 'Could not ceate new beer b/c:' + error});

    res.json({beer:beer});
  });
});

module.exports = router;
