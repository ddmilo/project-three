var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/devhops');


var User = require('../models/user.model.js');
// var Post = require('../models/post')
mongoose.Promise = global.Promise;


// First we clear the database of existing users and items.

User.remove({}, function(err){
  console.log(err);
});


// create new users
var dan = new User({
  email: 'ddmilo1029@gmail.com',
  username: 'Komix',
  password: 'Arkham29'
});
//
//
// // save the users
dan.save(function(err) {
  if (err) console.log(err);

  console.log('User created!');
});

