let express = require("express");
let router = express.Router();
let models = require("../models/chain.js");
var user = require("../models/user.js");
// var passport = require("passport"),
//   LocalStrategy = require("passport-local").Strategy;

router.get("/", function(req, res) {
  res.redirect("/testIndex"); //this redirects us to the route below(the root)
});

router.get("/testIndex", function(req, res){
  res.render("index");
});

router.get("/TriviaGame", function(req, res) {
  res.render("trivia");
});

//// how to use the put route to update the users donutcoins
router.put(function(req, res, next) {
  req.donutCoins = req.params.donutCoins;
  res.json(req.donutCoins);
});

module.exports = router;

