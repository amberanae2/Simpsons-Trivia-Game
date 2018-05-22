var mysql = require("mysql");
var Sequelize = require("sequelize");

//// sequelize may need to be added keep getting error

var connection = mysql.createConnection({
  port: 8080,
  host: "localhost",
  user: "root",
  password: "",
  database: "simpsonsdb"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;
