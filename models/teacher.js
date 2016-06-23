"use strict";

module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define("Teacher", {
    username: DataTypes.STRING,
    password:  DataTypes.STRING,
  });

  Teacher.sync().then(function () {
    // Table created
    console.log("teacher table created");
  });

  return Teacher;
};
