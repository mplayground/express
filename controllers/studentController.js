var models  = require('../models');

exports.findAll = function(req, res) {
  models.Student
    .findAll()
    .then(function(students) {
      res.json(students)
    });
};

exports.findOne = function(req, res) {
  let studentId = req.params.id
  models.Student
    .findOne({ where : {id : studentId} })
    .then(function(student){
      res.json(student)
    });
};

exports.post = function(req, res) {
  var reqStudent = req.body;

  // TODO 권한체크
  models.Student
    .findOne({ where : {username : reqStudent.username} })
    .then(function(student){
      if(student == null){
        models.Student
          .create(reqStudent)
          .then(function(created){
            console.log(created);
            res.send('OK');
          });
      }else{
        res.status(400).send("already registed student:" + student.username);
      }
    });
};

exports.login = function(req, res) {
  res.send('POST students login');
};
