let express = require("express");
let router = express.Router();
let models = require("../models/chain.js");      
var user = require("../models/user.js")
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


app.get("/", function(req, res) {
    res.redirect("/simpsons"); //this redirects us to the route below(the root)
   });
   
///   Route that gets the page “/simpsonsTriviaLogin”
   app.get("/simpsonsTriviaLogin", function(req, res) {
///   render to index with handlebar
      res.render("testIndex");
    });
  ///// route login once user is authenticated 
    app.get('/testtrivia', function(req, res) {
        res.send('trivia');
    });
    function isAuthenticated(req, res, next) {
        if (req.user.authenticated)
            return next("trivia");
      
        // If user cant be authenticated then they need to be redirected to the main page//not sure if I should redirect elsewhere
        res.redirect('/');
      }
      
      ///// may need to utitlize passport. js here once user has been authenticated 
    app.post("/user/create", function(req, res) {
      connection.query("INSERT INTO user_table", [req.body.user], function(err, result) {
            if (err) {
              throw err;
            } 
            console.log(result);
            res.redirect("/");
          });
      });
////// passsport .js is used here. **see notes below on this. 
//      passport.use(new LocalStrategy(
 //       function(username, password, done) {
//          User.findOne({ username: username }, function(err, user) {
//            if (err) { return done(err); }
 //           if (!user) {
 //             return done(null, false, { message: 'Incorrect username.' });
 //           }
 //           if (!user.validPassword(password)) {
 //             return done(null, false, { message: 'Incorrect password.' });
 //          }
  //          return done(null, user);
  //        });
  //      }
  //    ));
  //    app.post('trivia',
      
//    passport.authenticate('local', { successRedirect: 'trivia',
//                                   failureRedirect: '/',
//                                   failureFlash: true })
//);

      //// how to use the put route to update the users donutcoins
      app.put(function(req, res, next) {
        req.donutCoins= req.params.donutCoins;
        res.json(req.donutCoins);
      })

      ////after this data has been updated do we need to post it to the database tp reflect the users "donutcoins" count? 
      
      module.exports = router;




///// so if you notice there are 2 authentication pieces in this. Not sure if both of these are actually needed. One is for 
/// when the user actually logins in the other is passport.js. does not appear we would need both. will look again later on. 
