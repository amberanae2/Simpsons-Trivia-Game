module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      Username: DataTypes.STRING,
      password: DataTypes.STRING
      //// not sure if I need to add donut coins here since it is part of the table.
    });
    return User;
  };
<<<<<<< HEAD
  
=======

>>>>>>> 02716fb7050f70b363a56e0d6c5101c6fcc36c34
