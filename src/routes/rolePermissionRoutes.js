const express = require('express');

const router = express.Router();

const rolePermissionController = require('../controllers/rolePermissionController');

router.post('/assign', rolePermissionController.assignPermission);

router.get('/', rolePermissionController.getAllRolePermissions);

router.get('/role/:role_id', rolePermissionController.getPermissionsByRole);

router.delete('/remove', rolePermissionController.removePermission);

module.exports = router;