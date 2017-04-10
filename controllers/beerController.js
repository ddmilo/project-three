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

// SHOW
router.get('/:id', function showAction(req, res) {
  var id = req.params.id;

  Beer.findById(id, function(error, beer) {
    // if(error) response.json({message: 'Could not find beer b/c:' + error});

    res.json({beer: beer});
  }).select('-__v');
});


//UPDATE
router.patch('/:id', function updateAction(req, res) {
  var id = req.params.id;

  Beer.findById({_id: id}, function(error, beer) {
    if(error) res.json({message: 'Could not find beer b/c:' + error});

    if(req.body.name) beer.name = req.body.name;
    if(req.body.type) beer.type = req.body.crime;
    if(req.body.brewery) beer.brewery = req.body.location;
    if(req.body.alcohol) beer.alcohol = req.body.alcohol;
    if(req.body.image) beer.image = req.body.image;
    beer.save(function(error) {
      if(error) res.json({messsage: 'Could not update beer b/c:' + error});

      res.json({message: 'Criminal successfully updated', beer: beer});
    });
  }).select('-__v');
});

module.exports = router;
