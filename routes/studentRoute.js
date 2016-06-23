var express = require('express');
var router = express.Router();
var students = require('../controllers/studentController');

router
  .route('/')
    .get(students.findAll)
    .post(students.post);

router
  .route('/signup')
    .post(students.post);

router.
  route('/:id')
    .get(students.findOne);

router
  .route('/login')
  .post(students.login);

module.exports = router;
