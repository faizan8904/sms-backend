const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');

// CRUD routes
router.post('/', subjectController.createSubject);
router.get('/class/:classId', subjectController.getSubjectsByClass);
router.get('/:id', subjectController.getSubjectById);
router.put('/:id', subjectController.updateSubject);
router.delete('/:id', subjectController.deleteSubject);

module.exports = router;