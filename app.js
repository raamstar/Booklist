var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

////-->PROXY
let httpProxy = require('http-proxy')
///
const Books =require("./models/books.js")
var app = express();

//-->Proxy to API
const apiProxy = httpProxy.createProxyServer({
  target:"http://localhost:3001"
})
app.use('/api', function(req,res){
  apiProxy.web(req,res);
})
//-->End proxy


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

//----->APIS
// const mongoose = require("mongoose");
// mongoose.connect("mongodb://0.0.0.0:27017/Booklist")

// app.post("/books", function(req,res){
//   var book = req.body;
//   Books.create(book, function(err, books){
//     if (err){
//       throw err;
//     }
//     res.json(books)
//   })
// })
//
//
// app.get("/books", function(req,res){
//   Books.find(function(err,book){
//     if (err){
//       throw err;
//     }
//     res.json(book)
//   })
// });
//
// app.delete("/books/:_id", function(req,res){
//   let book_select = {_id: req.params._id};
//   Books.remove(book_select, function(err, books){
//     if (err){
//       throw err;
//     }
//     res.json(books)
//   })
// })
//
// ///
app.get('/', function(req,res){
  res.sendFile(path.resolve(__dirname, 'public', "index.html"))
})

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

module.exports = app;
