let express = require("express");
let router = express.Router();
let models = require("../models/chain.js");    ///// not sure if this needs to be var or since not since calling globally 
var character = require("../models/character.js");    
var user = require("../models/user.js")

///// need to pull from character data based on the character.js file
module.exports = function(app) {
    /// get function to pull a character based on user input 
    app.get("/api/all", function(req, res) {
      character.findAll({}).then(function(results) {
        res.json(results);
      });
    });
  
///// need to add another get for the user here


///// need to post the character

/// need to post maybe username??

/// need to post an image

//// loop through randomizing characters or create a seperate js file??

