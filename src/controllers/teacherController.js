const teacherService = require('../services/teacherService');
const { sendSuccess, sendError } = require('../utils/responseHandler');

// Create teacher
const createTeacher = async (req, res) => {

    try {

        const data = await teacherService.createTeacher(req.body);

        return sendSuccess(res, data, "Teacher created successfully", 201);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to create teacher", 500);
    }
};

// Get teachers
const getTeachersBySchool = async (req, res) => {

    try {

        const school_id = req.school_id;

        const data = await teacherService.getTeachersBySchool(school_id);

        return sendSuccess(res, data, "Teachers fetched", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to fetch teachers", 500);
    }
};

// Get teacher
const getTeacherById = async (req, res) => {

    try {

        const data = await teacherService.getTeacherById(req.params.id);

        return sendSuccess(res, data, "Teacher fetched", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to fetch teacher", 500);
    }
};

// Update teacher
const updateTeacher = async (req, res) => {

    try {

        const data = await teacherService.updateTeacher(req.params.id, req.body);

        return sendSuccess(res, data, "Teacher updated", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to update teacher", 500);
    }
};

// Delete teacher
const deleteTeacher = async (req, res) => {

    try {

        const data = await teacherService.deleteTeacher(req.params.id);

        return sendSuccess(res, data, "Teacher deleted", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to delete teacher", 500);
    }
};

module.exports = {
    createTeacher,
    getTeachersBySchool,
    getTeacherById,
    updateTeacher,
    deleteTeacher
};