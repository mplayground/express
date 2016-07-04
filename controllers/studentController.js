var passport = require('passport');
var models  = require('../models');
var auth = require('../auth');
// 패스포트 세팅
require('../passport').setup();

exports.findAll = function(req, res) {
  console.log('findAll' + req.user.id + "," + req.user.name);
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

exports.signup = function(req, res) {
  var reqStudent = req.body;

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

exports.login = function(req, res, next) {
  console.log("try login");

  //  패스포트 모듈로 인증 시도
  passport.authenticate('local', function (err, user, info) {
    console.log("success to auth " + user.id);
    var error = err || info;
    if (error) return res.json(401, error);
    if (!user) return res.json(404, {message: 'Something went wrong, please try again.'});

    var token = auth.signToken({id:user.id, role:'student'});
    res.cookie('access_token', token);

    console.log('req.cookies : ' + req.cookies.access_token);

    res.json({ access_token: token });
  })(req, res, next);
};
