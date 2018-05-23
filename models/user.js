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
