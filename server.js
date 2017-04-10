var express = require('express');
var bodyParser = require('body-parser');
var app = express();

require('dotenv').config();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

// var session = require('express-session');
var mongoose = require('mongoose');


// <<<<<<< HEAD
// =======

var authController = require('./controllers/authController.js');
var reviewController = require('./controllers/reviewController.js');


// >>>>>>> master
// mongoose.connect(process.env.MONGODB_URI);
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/devhops')

db.on('error', function(err){
 console.log(err);
});
db.once('open', function() {
 console.log("database has been connected!");
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));


var authController = require('./controllers/authController.js');
var reviewController = require('./controllers/reviewController.js');
var userController = require('./controllers/userController.js');
var beerController = require('./controllers/beerController.js');

app.use('/api/auth', authController);
app.use('/api/review', reviewController);
app.use('/api/user', userController);
app.use('/api/beer', beerController);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});

app.listen(3000 | console.log('mic check'));

module.exports = app;
