const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// var index = require('./routes/index');
// var users = require('./routes/users');
const Books =require("./models/books.js")

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//----->APIS
const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/Booklist")
let db=mongoose.connection

//---->
app.use(session({
  secret: 'TeachMeAndILearn',
  saveUninitialized: false,
  resave: false, //don't save session if unmodified
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 2},
  store: new MongoStore({
    mongooseConnection: db,
    touchAfter: 24 * 3600 // time period in seconds
  })
}))
//-->save session cart API
app.post("/cart", function(req,res){
  var cart = req.body;
  req.session.cart = cart;
  req.session.save(function(err){
    if (err){
      throw err;
    }
    res.json(req.session.cart)
  })
})
app.get("/cart",function(req,res){
  if (typeof req.session.cart !== 'undefined'){
    res.json(req.session.cart);
  }
})


app.post("/books", function(req,res){
  var book = req.body;
  Books.create(book, function(err, books){
    if (err){
      throw err;
    }
    res.json(books)
  })
})


app.get("/books", function(req,res){
  Books.find(function(err,book){
    if (err){
      throw err;
    }
    res.json(book)
  })
});

app.delete("/books/:_id", function(req,res){
  let book_select = {_id: req.params._id};
  Books.remove(book_select, function(err, books){
    if (err){
      throw err;
    }
    res.json(books)
  })
})
app.listen(3001,function(err){
  if (err){
    return console.log(err);
  }
  console.log("You are listening on port 3001");
})
