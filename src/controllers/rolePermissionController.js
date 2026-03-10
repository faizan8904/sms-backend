const rolePermissionService = require('../services/rolePermissionService');
const { sendSuccess, sendError } = require('../utils/responseHandler');

// Assign permission
const assignPermission = async (req, res) => {

    try {

        const data = await rolePermissionService.assignPermission(req.body);

        return sendSuccess(res, data, "Permission assigned to role", 201);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to assign permission", 500);
    }
};

// Get permissions for role
const getPermissionsByRole = async (req, res) => {

    try {

        const data = await rolePermissionService.getPermissionsByRole(req.params.role_id);

        return sendSuccess(res, data, "Role permissions fetched", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to fetch role permissions", 500);
    }
};

// Remove permission
const removePermission = async (req, res) => {

    try {

        const { role_id, permission_id } = req.body;

        const data = await rolePermissionService.removePermission(role_id, permission_id);

        return sendSuccess(res, data, "Permission removed", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to remove permission", 500);
    }
};

// Get all mappings
const getAllRolePermissions = async (req, res) => {

    try {

        const data = await rolePermissionService.getAllRolePermissions();

        return sendSuccess(res, data, "Role permissions fetched", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to fetch mappings", 500);
    }
};

module.exports = {
    assignPermission,
    getPermissionsByRole,
    removePermission,
    getAllRolePermissions
};