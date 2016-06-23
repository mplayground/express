var express = require('express');
var router = express.Router();
var studentController = require('../controllers/studentController');

router
  .route('/')
    .get(studentController.findAll)
    .post(studentController.post);

router
  .route('/signup')
    .post(studentController.post);

router.
  route('/:id')
    .get(studentController.findOne);

router
  .route('/login')
  .post(studentController.login);

module.exports = router;
