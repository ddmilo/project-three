var express = require('express');
var app = express();

require('dotenv').config();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var session = require('express-session');
var mongoose = require('mongoose');



var authController = require('./controllers/authController.js');
var reviewController = require('./controllers/reviewController.js');


// mongoose.connect(process.env.MONGODB_URI);
var db = mongoose.connection;

db.on('error', function(err){
 console.log(err);
});
db.once('open', function() {
 console.log("database has been connected!");
});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

app.use('/api/DevHops', authController);
app.use('/api/DevHops', reviewController);


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
  res.render('error');
});

app.listen(3000 | console.log('mic check'));

module.exports = app;
