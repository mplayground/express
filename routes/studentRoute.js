var express = require('express');
var router = express.Router();

var studentController = require('../controllers/studentController');
var auth = require('../auth');

router
  .route('/')
    .get(auth.isAuthenticated(),
         auth.requireRole('admin'),
         studentController.findAll)

router.
  route('/:id')
    .get(auth.isAuthenticated(),
         auth.requireRole('owner'),
         studentController.findOne);

router
  .route('/signup')
    .post(studentController.signup);

router
  .route('/login')
    .post(studentController.login);

module.exports = router;
