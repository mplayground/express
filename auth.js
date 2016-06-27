'use strict';

var jwt = require('jsonwebtoken');
var compose = require('composable-middleware');
var SECRET = 'token_secret';

// JWT 토큰 생성 함수
function signToken(id) {
  return jwt.sign({id: id}, SECRET, {
    algorithm: 'HS256',
    expiresIn: '1h'
  });
}

// 토큰을 해석하여 유저 정보를 얻는 함수
function isAuthenticated() {
  return compose()
      // Validate jwt
      .use(function(req, res, next) {
        var token = req.body.access_token || req.query.access_token || req.headers['x-access-token'];
        if(token){
          jwt.verify(token, SECRET, function(err, decoded){
            if (err) {
              return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
              console.log('decoded : ' + JSON.stringify(decoded));
              //인증이 완료되면 토큰의 값을 user에 담아 전달한다.
              req.user = decoded;
              next();
            }
          });
        }else{
          return res.status(403).send({
            success: false,
            message: 'No token provided.'
          });
        }
      })
      // Attach user to request
      .use(function(req, res, next) {
        console.log('users : ' + JSON.stringify(req.user));
        //위 인증이 왼된 user_id로 부터 필요한 정보를 DB에서 조회해 user 정보를 완성한다.
        req.user = req.user.id;
        next();
      });
}

function requireRole(roles) {
  return function(req, res, next) {
    console.log("requireRole " + roles + " currentRole : " + req.user.role);
    // admin이면 무조건 호출가능.
    if(req.user.role == 'admin'){
      next();
    } else if(roles == 'owner'){
      // owner이면 api상의 param id와 access_token에 있는 id가 일치하는지 확인한다.
      //TODO teacher와 student가 동일한 ID를 갖을경우 문제가됨
      if(req.params.id == req.user.id){
        next();
      } else {
        res.status(403).send({
          success: false,
          message: 'No permission.'
        });
      }
    } else if(roles == req.user.role){
      // role이 일치하는지 확인한다.
      next();
    } else {
      res.status(403).send({
        success: false,
        message: 'No permission.'
      });
    }
  };
}

exports.signToken = signToken;
exports.isAuthenticated = isAuthenticated;
exports.requireRole = requireRole;
