//REQUIREMENTS
var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var Beer = require('../models/beer.model.js');

//BEER INDEX ROUTE
router.get('/', function indexAction(req, res) {
  Beer.find(function(error, beer) {
    if(error) res.json({message: 'Could not find any beer'});

    res.json({beer: beer});
  }).select('-__v');
});

//NEW BEER POST ROUTE
router.post('/', function createAction(req, res) {
  var beer = new Beer(req.body);
  beer.save(function(error) {
    res.json({beer:beer});
  });
});

//SHOW SINGLE BEER
router.get('/:id', function showAction(req, res) {
  var id = req.params.id;
  Beer.findById(id, function(error, beer) {
    res.json({beer: beer});
  }).select('-__v');
});

//EXPORTS
module.exports = router;
