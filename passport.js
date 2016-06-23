'use strict';

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var models  = require('../models');

exports.setup = function () {
  passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
      },
      function(username, password, done) {
        models.Student.
          .findOne({ where : {username : username} })
          .then(function(user){
            if(user != null){
              if(user.password === password){
                // 로그인 성공시 유저 아이디를 넘겨준다.
                var user = {id: 'user_1'};
                return done(null, user);
              }else{
                return done(null, false, { message: 'Fail to login.' });
              }
            }else{
              return done(null, false, { message: 'Fail to login.' });
            }
          });
      }
  ));

  passport.serializeUser(function(user,done){
    done(null, user.id);
  });

  passport.serializeUser(function(id,done){
    models.Student.
      .findOne({ where : {id : id} })
      .then(function(user){
        done(err, user);
      });
  });

};
