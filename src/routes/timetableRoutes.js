const express = require('express');
const router = express.Router();
const timetableController = require('../controllers/timetableController');

// CRUD routes
router.post('/', timetableController.createTimetable);
router.get('/class/:classId/section/:sectionId', timetableController.getTimetablesByClassSection);
router.get('/:id', timetableController.getTimetableById);
router.put('/:id', timetableController.updateTimetable);
router.delete('/:id', timetableController.deleteTimetable);

module.exports = router;