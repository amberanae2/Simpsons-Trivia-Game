var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Character = sequelize.define("character", {
  Name: {
    type: Sequelize.STRING
  },
  Voice_Actor: {
    type: Sequelize.STRING
  },
  Episode: {
    type: Sequelize.STRING
  },
  air_date: {
    type: Sequelize.INTEGER   ///// NOT SURE IF THIS NEEDS TO BE CHANGED TO BOOLEAN
  }
}, {
    Image: {
        type: Sequelize.STRING
}
});


Character.sync();

module.exports = Character; ////not sure if i need this here, table created in DB already. 
