const express = require('express');

const router = express.Router();

const teacherController = require('../controllers/teacherController');
const attachSchool = require('../middleware/schoolMiddleware');

router.post('/', teacherController.createTeacher);

router.get('/', attachSchool, teacherController.getTeachersBySchool);

router.get('/:id', teacherController.getTeacherById);

router.put('/:id', teacherController.updateTeacher);

router.delete('/:id', teacherController.deleteTeacher);

module.exports = router;