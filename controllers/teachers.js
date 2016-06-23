
var models  = require('../models');

exports.get = function(req, res) {
  models.Teacher
    .findAll()
    .then(function(teachers) {
      res.json(teachers)
    });
};

exports.post = function(req, res) {
  var teacher = req.body;
  // TODO 중복체크
  // TODO 권한체크
  models.Teacher
    .create(teacher)
    .then(function(){
      res.send('OK');
    });
};
