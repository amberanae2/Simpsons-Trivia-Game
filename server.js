const express = require("express");
const bodyParser = require("body-parser");

const SHA256 = require("crypto-js/sha256");
const Blockchain = require("./models/chain.js");
const Transaction = require("./models/transaction.js");
<<<<<<< HEAD
=======
const User = require("./models/user.js");

>>>>>>> 02716fb7050f70b363a56e0d6c5101c6fcc36c34

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

let jsChain =  new Blockchain; // creates new chain

console.log('\nCreating some transactions.....');

let testTrans = new Transaction('address1', 'address2', 100);  // creates some sample transactions
let anotherTrans = new Transaction('address2', 'address1', 50);

jsChain.createTransaction(testTrans);
jsChain.createTransaction(anotherTrans);

console.log('Starting miner...');
jsChain.minePendingTransactions("my-address");     //creates a new block and adds the transaction data to it

console.log('balance of my address is ', jsChain.getBalanceOfAddress("my-address"),"\n");

console.log('Starting miner again...');
jsChain.minePendingTransactions("my-address");

console.log('balance of my address is ', jsChain.getBalanceOfAddress("my-address"));
console.log("\n");


let newUser = new User("Gian", "Gian",12);

console.log("test password hash ",newUser._password);
newUser._password = "AARON";
console.log("test NEW password hash ",newUser._password);
console.log(newUser.getpassword);