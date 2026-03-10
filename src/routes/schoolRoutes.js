const express = require('express');
const router = express.Router();

const schoolController = require('../controllers/schoolController');
const attachSchool = require('../middleware/schoolMiddleware');

router.post('/', schoolController.createSchool);

router.get('/', attachSchool, schoolController.getAllSchools);

router.get('/:id', attachSchool, schoolController.getSchoolById);

router.put('/:id', attachSchool, schoolController.updateSchool);

router.delete('/:id', attachSchool, schoolController.deleteSchool);

module.exports = router;