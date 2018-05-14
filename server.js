const express = require("express");
const bodyParser = require("body-parser");

const SHA256 = require("crypto-js/sha256");
const Blockchain = require("./models/chain.js");
const Transaction = require("./models");

let PORT = process.env.PORT || 8080;
let app = express();

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
// app.use(bodyParser.json());

//var exphbs = require("express-handlebars");

//app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.set("view engine", "handlebars");

//var routes = require("./controllers/burgersController.js");

//app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});

/*==========================================================
Blockchain Test below
========================================================== */

let jsChain =  new Blockchain;

console.log('\nCreating some transactions.....');

let testTrans = new Transaction('address1', 'address2', 100);
let anotherTrans = new Transaction('address2', 'address1', 50);

jsChain.createTransaction(testTrans);
jsChain.createTransaction(anotherTrans);

console.log('Starting miner...');
jsChain.minePendingTransactions("my-address");

console.log('balance of my address is ', jsChain.getBalanceOfAddress("my-address"),"\n");

console.log('Starting miner again...');
jsChain.minePendingTransactions("my-address");

console.log('balance of my address is ', jsChain.getBalanceOfAddress("my-address"));
