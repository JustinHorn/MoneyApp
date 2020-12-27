if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_ATLAS_URL, { useNewUrlParser: true });

var indexRouter = require('./routes/index');

const passport = require('./passport-config');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const cors = require('cors');

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);

app.get('/react', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.get('/user/me', (req, res, next) => {
  res.send(req.user);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
