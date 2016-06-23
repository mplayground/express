var express = require('express');
var router = express.Router();
var teachers = require('../controllers/teacherController');

router.route('/')
  .get(teachers.get)
  .post(teachers.post);

module.exports = router;
