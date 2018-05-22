var mysql = require("mysql");
//var Sequelize = require("sequelize");

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "simpsonsdb"
  });

  module.exports = connection;
  
  


 connection.connect(function(err) {
   if (err) {
     console.error("error connecting: " + err.stack);
     return;
   }
   console.log("connected as id " + connection.threadId);
   start();
 });

 function start() {
     connection.query(
         'SELECT * FROM characters', function(err, results){
             if (err) throw err;

             var rando = results[Math.floor(Math.random() * results.length)];

             var {id, name, voice_actor, episode, air_date, image} = rando; 

             console.log("Id: " + id);
             console.log("Name: " + name);
             console.log("Voice Actor(s): " + voice_actor);
             console.log("Air Date: " + air_date);
             console.log("Image: " + image);
            
             // res.render("trivia", { voice_actor: voice_actor }); 
             // game data is a variable I made up. It’s being used in the imaginary Sequelize code. 
            
         }
     )

 };