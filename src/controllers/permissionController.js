const permissionService = require('../services/permissionService');
const { sendSuccess, sendError } = require('../utils/responseHandler');

const createPermission = async (req, res) => {
    try {

        const data = await permissionService.createPermission(req.body);

        return sendSuccess(res, data, "Permission created", 201);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to create permission", 500);
    }
};

const getAllPermissions = async (req, res) => {
    try {

        const data = await permissionService.getAllPermissions();

        return sendSuccess(res, data, "Permissions fetched", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to fetch permissions", 500);
    }
};

const getPermissionById = async (req, res) => {
    try {

        const data = await permissionService.getPermissionById(req.params.id);

        return sendSuccess(res, data, "Permission fetched", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to fetch permission", 500);
    }
};

const updatePermission = async (req, res) => {
    try {

        const data = await permissionService.updatePermission(req.params.id, req.body);

        return sendSuccess(res, data, "Permission updated", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to update permission", 500);
    }
};

const deletePermission = async (req, res) => {
    try {

        const data = await permissionService.deletePermission(req.params.id);

        return sendSuccess(res, data, "Permission deleted", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to delete permission", 500);
    }
};

module.exports = {
    createPermission,
    getAllPermissions,
    getPermissionById,
    updatePermission,
    deletePermission
};