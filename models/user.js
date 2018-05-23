<<<<<<< HEAD
var Mysql = require("mysql");
var connection = require("../config/connection.js");

var connect =  function(cb) {
    connection.query("SELECT * FROM characters", (err, results) => {
      if (err) throw err;
      
      connection.end();
      console.log("inqeurry");
      cb = results;
      return cb;
    });
  }
module.exports = connect;
=======
var Character = require("");
var User = require("");
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");


sequelize.query('SELECT * FROM characters', { model: characters }).then(characters => {


})
>>>>>>> b38ecc532a6825e441c0c54e7f02318cadf318eb
