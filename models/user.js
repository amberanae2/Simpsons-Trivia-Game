var Character = require("");
var User = require("");
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");


sequelize.query('SELECT * FROM characters', { model: characters }).then(characters => {


})