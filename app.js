const createError = require('http-errors');
const express = require('express');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const connection = "mongodb://localhost/findog";
mongoose.set('useUnifiedTopology', true);
mongoose.connect(connection, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Router = require('./routes/');
const app = express();

//middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//passport
const User = require('./model/userModel');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/v1/findog/user', Router.userResource);
app.use('/v1/findog/pet', Router.petResource);
app.use('/v1/findog/post', Router.postResource);
app.use('/v1/findog/auth', Router.authResource);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//dev error handle
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: err
  });
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = err//req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
