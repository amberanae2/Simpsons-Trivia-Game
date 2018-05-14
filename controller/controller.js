let express = require("express");
let router = express.Router();
let models = require("../models/chain.js");

router.get("/", (req, res) => {
    res.redirect("/hangman");
});

router.get("/hangman", (req, res) => {

    res.render("index", {});
});

module.exports = router;