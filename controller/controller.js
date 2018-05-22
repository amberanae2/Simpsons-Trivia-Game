let express = require("express");
let router = express.Router();
let models = require("../models/chain.js");      
var user = require("../models/user.js")
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


router.get("/", function(req, res) {
    res.redirect("/testIndex"); //this redirects us to the route below(the root)
   });
   
///   Route that gets the page “/simpsonsTriviaLogin”
   router.get("/TriviaGame", function(req, res) {
///   render to index with handlebar
      res.render("testIndex");
    });
  ///// route login once user is authenticated 
    router.get('/TriviaGame', function(req, res) {
        res.send('testTrivia ');
    });
    function isAuthenticated(req, res, next) {
        if (req.user.authenticated)
            return next("testTrivia");
      
        // If user cant be authenticated then they need to be redirected to the main page//not sure if I should redirect elsewhere
        res.redirect('/');
      }
      
      ///// may need to utitlize passport. js here once user has been authenticated 
    router.post("/user/create", function(req, res) {
      connection.query("INSERT INTO user_table", [req.body.user], function(err, result) {
            if (err) {
              throw err;
            } 
            console.log(result);
            res.redirect("/");
          });
      });

      router.put(function(req, res, next) {
        req.donutCoins= req.params.donutCoins;
        res.json(req.donutCoins);
      })
      
      module.exports = router;




