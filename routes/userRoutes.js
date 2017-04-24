var express = require('express');
var router = express.Router();
var User = require("../models/UserModel");
var passport = require('passport');

//the '/users' routes will go here
router.get('/success', function(req, res) {
    if (req.isAuthenticated()) {
        res.send('Hey, ' + req.user + ', hello from the server!');
    } else {
        res.redirect('/login');
    }
});

router.get('/login', function(req, res) {
    res.sendFile(__dirname + '/public/login.html');
});


router.post('/register', function(req, res, next) {
  User.register(new User({ username: req.body.username }), req.body.password, function(err, user) {
    if (err) {
      console.log('Error registering!', err);
      return next(err);
    }
    req.login(user, function(err) {
      if (err) {
        return next(err);
      }
      res.send(req.user);
    });
  });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.send(req.user.username)
});

router.get('/logout', function(req, res) {
  req.logout();
  res.send('Logged Out');
});

router.get('/currentuser', function(req, res) {
  if (req.user) {
    res.send(req.user.username)
  } else {
    res.send(null)
  }
});

var ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.send(401, { message: "Unauthorized" });
  }
};

router.put('/:id', ensureAuthenticated, function(req, res, next) {
  //Find beer and update
});

module.exports = router;
