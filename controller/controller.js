let express = require("express");
let router = express.Router();
let models = require("../models/chain.js");      
var user = require("../models/user.js")

/// for testing purposes use the testHtml

//// need to route to testHtml

router.get("/", function(req, res) {
    res.redirect("/simpsonTriviaLogin"); //this redirects us to the route below.
   });

   
   router.get("/simpsonTriviaLogin", function(req, res) {
    // express callback response by calling burger.selectAllBurger
   //SEQUELIZE code to pull data from database using the information gathered from the login page.
      // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
      res.render("trivia", { game_data: gameData }); 
   // game data is a variable I made up. It’s being used in the imaginary Sequelize code. 
    });
   
   