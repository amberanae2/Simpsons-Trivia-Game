var connection = require("../config/connection.js");

var connect =  function(cb) {
    connection.query("SELECT * FROM characters", (err, results) => {
      if (err) throw err;
      
     
      console.log("inqeurry");
      cb = results;
      // connection.end();
      return cb;

    });
  }
module.exports = connect;
