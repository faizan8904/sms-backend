const userService = require('../services/userService');
const { sendSuccess, sendError } = require('../utils/responseHandler');

// Create user
const createUser = async (req, res) => {

    try {

        const data = await userService.createUser(req.body);

        return sendSuccess(res, data, "User created successfully", 201);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to create user", 500);
    }
};

// Get users
const getUsersBySchool = async (req, res) => {

    try {

        const school_id = req.school_id;

        const data = await userService.getUsersBySchool(school_id);

        return sendSuccess(res, data, "Users fetched successfully", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to fetch users", 500);
    }
};

// Get user by id
const getUserById = async (req, res) => {

    try {

        const data = await userService.getUserById(req.params.id);

        return sendSuccess(res, data, "User fetched", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to fetch user", 500);
    }
};

// Update user
const updateUser = async (req, res) => {

    try {

        const data = await userService.updateUser(req.params.id, req.body);

        return sendSuccess(res, data, "User updated", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to update user", 500);
    }
};

// Delete user
const deleteUser = async (req, res) => {

    try {

        const data = await userService.deleteUser(req.params.id);

        return sendSuccess(res, data, "User deleted", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to delete user", 500);
    }
};

module.exports = {
    createUser,
    getUsersBySchool,
    getUserById,
    updateUser,
    deleteUser
};