"use strict";

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("Student", {
    username: DataTypes.STRING,
    password:  DataTypes.STRING,
  });

  Student.sync().then(function () {
    // Table created
    console.log("Student table created");
  });

  return Student;
};
