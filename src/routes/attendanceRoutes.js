const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

// CRUD
router.post('/', attendanceController.markAttendance);
router.get('/student/:studentId', attendanceController.getAttendanceByStudent);
router.get('/class/:classId/section/:sectionId/date/:date', attendanceController.getAttendanceByClassDate);
router.put('/:id', attendanceController.updateAttendance);
router.delete('/:id', attendanceController.deleteAttendance);

module.exports = router;