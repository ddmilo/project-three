var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user.model.js');

//HASH PASSWORD
function createSecure(req, res, next) {
  var password = req.body.password;

  res.hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  next();
}

//LOGIN
function loginUser(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({ email: email })
  .then(function(foundUser){
    if (foundUser == null) {
      res.json({status: 401, data: "unauthorized"});

    } else if (bcrypt.compareSync(password, foundUser.password_digest)) {
      req.session.currentUser = foundUser;
    }
    next();
  })
  .catch(function(err){
    res.json({status: 500, data: err});
  });
}

//NOT SURE WHAT THIS IS DOING, MAY NEED TO DELETE
function authorized(req, res, next) {
  console.log(req.session.currentUser);
  console.log(req.params.id)
  if (!req.session.currentUser || req.session.currentUser._id !== req.params.id) {
    return res.json({status: 404, data: "unauthorized"});
  }
  next();
};

//UPDATE CURRENT SESSION USER
function update(req, res, next) {
  console.log(req.body.userId + "in auth");
  User.findById(req.body.userId)
    .then(function(foundUser) {
      req.session.currentUser = foundUser;
      console.log(foundUser);
      next();
    });
}

//EXPORTS
module.exports = {
  createSecure: createSecure,
  loginUser: loginUser,
  authorized: authorized,
  update: update
};
