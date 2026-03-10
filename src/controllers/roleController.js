const roleService = require('../services/roleService');
const { sendSuccess, sendError } = require('../utils/responseHandler');

// Create Role
const createRole = async (req, res) => {

    try {

        const data = await roleService.createRole(req.body);

        return sendSuccess(res, data, "Role created successfully", 201);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to create role", 500);
    }
};

// Get Roles by School
const getRolesBySchool = async (req, res) => {

    try {

        const school_id = req.school_id;

        const data = await roleService.getRolesBySchool(school_id);

        return sendSuccess(res, data, "Roles fetched successfully", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to fetch roles", 500);
    }
};

// Get Role
const getRoleById = async (req, res) => {

    try {

        const data = await roleService.getRoleById(req.params.id);

        return sendSuccess(res, data, "Role fetched", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to fetch role", 500);
    }
};

// Update Role
const updateRole = async (req, res) => {

    try {

        const data = await roleService.updateRole(req.params.id, req.body);

        return sendSuccess(res, data, "Role updated", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to update role", 500);
    }
};

// Delete Role
const deleteRole = async (req, res) => {

    try {

        const data = await roleService.deleteRole(req.params.id);

        return sendSuccess(res, data, "Role deleted", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to delete role", 500);
    }
};

module.exports = {
    createRole,
    getRolesBySchool,
    getRoleById,
    updateRole,
    deleteRole
};