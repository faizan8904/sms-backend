const express = require('express');

const router = express.Router();

const roleController = require('../controllers/roleController');
const attachSchool = require('../middleware/schoolMiddleware');

router.post('/', roleController.createRole);

router.get('/', attachSchool, roleController.getRolesBySchool);

router.get('/:id', roleController.getRoleById);

router.put('/:id', roleController.updateRole);

router.delete('/:id', roleController.deleteRole);

module.exports = router;