const express = require('express');

const router = express.Router();

const classController = require('../controllers/classController');
const attachSchool = require('../middleware/schoolMiddleware');

router.post('/', classController.createClass);

router.get('/', attachSchool, classController.getClassesBySchool);

router.get('/:id', classController.getClassById);

router.put('/:id', classController.updateClass);

router.delete('/:id', classController.deleteClass);

module.exports = router;