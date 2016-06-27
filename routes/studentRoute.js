var express = require('express');
var router = express.Router();
var validate = require('express-jsonschema').validate;

var StudentsSchema = require('../validation/StudentSchema.json');
var studentController = require('../controllers/studentController');

var auth = require('../auth');

router
  .route('/')
    .get(auth.isAuthenticated(),    // 인증
         auth.requireRole('admin'), // Role ACL
         studentController.findAll)

router.
  route('/:id')
    .get(auth.isAuthenticated(),
         auth.requireRole('owner'),
         studentController.findOne);

router
  .route('/signup')
    .post(validate({body:StudentsSchema}), // json request validation
          studentController.signup);

router
  .route('/login')
    .post(validate({body:StudentsSchema}), // json request validation
          studentController.login);

module.exports = router;
