const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const attachSchool = require('../middleware/schoolMiddleware');

router.post('/', userController.createUser);

router.get('/', attachSchool, userController.getUsersBySchool);

router.get('/:id', userController.getUserById);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;