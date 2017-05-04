var express = require('express');
var app = express();
var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;
var expressSession = require('express-session')
var passport = require('passport')
var userRoutes = require ('./routes/userRoutes')
var Beer = require("./models/BeerModel");
var User = require("./models/UserModel");
mongoose.connect('mongodb://localhost/beers');

var beerRoutes = require('./routes/beerRoutes');
var bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.static('node_modules'));



app.use(expressSession({
    secret: 'yourSecretHere',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy()); //Thanks to m-l-p there is no need to create a local strategy
passport.serializeUser(User.serializeUser()); //also it helps here
passport.deserializeUser(User.deserializeUser()); //and here

app.use('/beers', beerRoutes);
app.use('/users', userRoutes);
// app.get('/', function(req, res) {
//   res.send('Testing Server')
// })

app.listen('8000', function() {
  console.log("yo yo yo, on 8000 bro");
});
