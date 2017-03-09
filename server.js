var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beers');

var Beer = require("./BeerModel");

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(express.static('node_modules'));

// app.get('/', function(req, res) {
//   res.send('Testing Server')
// })

app.get('/beers', function (req, res, next) {
  Beer.find(function (error, beers) {
    if (error) {
      //console.log(error)
      console.error(error)
      return next(error);
    } else {
      console.log(beers)
      res.json(beers);
    }
  });
});

app.post('/beers', function(req, res, next) {
  var beer = new Beer(req.body);

  beer.save(function(err, beers) {
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.json(beers);
    }
  });
});


app.delete('/beers/:id', function(req, res, next) {
  Beer.remove({ _id: req.params.id }, function(err, beers) {
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.json(beers);
    }
  });
});

app.put('/beers/:id', function(req, res, next) {
  Beer.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}, function(err, beer) {
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.send(beer);
    }
  });
});

app.listen('8000', function() {
  console.log("yo yo yo, on 8000 bro");
});