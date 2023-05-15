var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var projectRouter = require('./routes/project');
var countryRouter = require('./routes/country');
var tokenRouter = require('./routes/token');
var suggestedArticlesRouter = require('./routes/suggested-articles');
var timezoneRouter = require('./routes/timezone');
var adminRouter = require('./routes/admin');
var commentRouter = require('./routes/comment');
var communityRouter = require('./routes/community');
var eventRouter = require('./routes/event');
var exploreRouter = require('./routes/explore');
var newsRouter = require('./routes/news');
var notificationRouter = require('./routes/notification');
var postRouter = require('./routes/post');
var searchRouter = require('./routes/search');
var userRouter = require('./routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/project', projectRouter);
app.use('/country', countryRouter);
app.use('/token', tokenRouter);
app.use('/suggested-articles', suggestedArticlesRouter);
app.use('/timezone', timezoneRouter);
app.use('/admin', adminRouter);
app.use('/comment', commentRouter);
app.use('/community', communityRouter);
app.use('/event', eventRouter);
app.use('/explore', exploreRouter);
app.use('/news', newsRouter);
app.use('/notification', notificationRouter);
app.use('/post', postRouter);
app.use('/search', searchRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
