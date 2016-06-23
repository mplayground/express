var express = require('express');
var router = express.Router();
var teacherController = require('../controllers/teacherController');

router.route('/')
  .get(teacherController.get)
  .post(teacherController.post);

module.exports = router;
