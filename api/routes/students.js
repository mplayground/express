var express = require('express');
var router = express.Router();
var students = require('../controllers/students');

router.route('/')
  .get(students.get)
  .post(students.post);

module.exports = router;
