var connection = require("./config/connection.js");
var db = require("./models");


module.exports = function(app) {

    app.get("/api/img", function(req, res) {
        img.findOne({}).then(function(img) {
          res.json(img);
        });
      });
    
      app.get("/api/character/:id", function(req, res) {
        db.character.findOne({
          where: {
            id: req.params.id
          }
        }).then(function() {
          res.json(character);
        });
      });
    
      app.post("/api/img", function(req, res) {
        console.log(req.body);
        img.create(req.body).then(function(img) {
          res.json(img);
        });
      });
    
    };
    



