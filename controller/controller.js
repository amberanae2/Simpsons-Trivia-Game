let express = require("express");
let router = express.Router();
let models = require("../models/chain.js");
//const connection = require('../config/connection.js')

router.get("/", (req, res) => {
  res.redirect("/index"); //this redirects us to the route below(the root)
});

router.get("/index", (req, res) => {
 // const queryString = `SELECT * FROM characters`
  //connection.query(queryString, (err, results) => {
   // if (err) throw err;
    // console.log(res)
    // const hbsObj = {
    //   character: 
    // }
    res.render("index");
//  });
});

router.get("/TriviaGame", (req, res) => {
  res.render("trivia");
});
  
router.get("/Cashout", (req, res) => {
  res.render("cashout");
});

//// how to use the put route to update the users donutcoins
router.put((req, res, next) => {
  req.donutCoins = req.params.donutCoins;
  res.json(req.donutCoins);
});

module.exports = router;
