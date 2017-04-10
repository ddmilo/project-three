// var express = require('express')
// var router = express.Router()
// var bodyParser = require('body-parser') //parses information from POST
// // var methodOverride = require('method-override') //used to manipulate POST
// var Auth = require('../models/user.model.js');
// var methodOverride = require('method-override')
//
// // GET
// router.get('/', function indexAction(req, res) {
//   Auth.find(function(error, auth){
//     if(error) response.json({message:''});
//
//     response.json({auth: auth});
//   }).select('-__v');
// });
//
// // router.get('/signUp', function(req, res){
// //   response.json({auth: auth});
// // })
//
// //POST
// router.post('/', function createAction(req, res){
//   console.log('user created');
//   console.log('body:', request.body)
//
//   var user = new User(request.body)
//
//   user.save(function(error){
//   	if(error) response.json({message: 'could not create because of:' + error})
//
//   		response.json({auth: auth});
//   })
//
// })
//
//
//
//
//
// module.exports = router;
