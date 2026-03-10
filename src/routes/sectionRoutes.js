const express = require('express');
const router = express.Router();

const sectionController = require('../controllers/sectionController');

// CRUD routes
router.post('/', sectionController.createSection);

router.get('/class/:classId', sectionController.getSectionsByClass);

router.get('/:id', sectionController.getSectionById);

router.put('/:id', sectionController.updateSection);

router.delete('/:id', sectionController.deleteSection);

module.exports = router;