//REQUIRE PACKAGES
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
require('dotenv').config();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var methodOverride = require('method-override');

//MONGO STUFF
var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect('mongodb://localhost/devhops');
db.on('error', function(err){
 console.log(err);
});
db.once('open', function() {
 console.log("database has been connected!");
});

//AUTH STUFF
app.use(session({
  secret: "beerbeerbeer",
  resave: false,
  saveUninitialized: false
}));

//USE PACKAGES
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

//REQUIRE CONTROLLERS
var sessionsController = require('./controllers/sessions.js');
var userController = require('./controllers/userController.js');
var reviewController = require('./controllers/reviewController.js');
var beerController = require('./controllers/beerController.js');

//USE CONTROLLERS
app.use('/api/sessions', sessionsController);
app.use('/api/review', reviewController);
app.use('/api/users', userController);
app.use('/api/beer', beerController);

//ERROR HANDLING STUFF
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json('error');
});

//LISTEN
// app.listen(3000 | console.log('mic check'));

//EXPORTS
module.exports = app;
