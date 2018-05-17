let express = require("express");
let router = express.Router();
let models = require("../models/chain.js");

router.get("/", (req, res) => {
    res.redirect("/simpsons");
});

router.get("/simpsons", (req, res) => {

    res.render("index", {});
});


module.exports = router;