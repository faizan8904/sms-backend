const classService = require('../services/classService');
const { sendSuccess, sendError } = require('../utils/responseHandler');

// Create class
const createClass = async (req, res) => {

    try {

        const data = await classService.createClass(req.body);

        return sendSuccess(res, data, "Class created successfully", 201);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to create class", 500);
    }
};

// Get classes
const getClassesBySchool = async (req, res) => {

    try {

        const school_id = req.school_id;

        const data = await classService.getClassesBySchool(school_id);

        return sendSuccess(res, data, "Classes fetched", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to fetch classes", 500);
    }
};

// Get class
const getClassById = async (req, res) => {

    try {

        const data = await classService.getClassById(req.params.id);

        return sendSuccess(res, data, "Class fetched", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to fetch class", 500);
    }
};

// Update class
const updateClass = async (req, res) => {

    try {

        const data = await classService.updateClass(req.params.id, req.body);

        return sendSuccess(res, data, "Class updated", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to update class", 500);
    }
};

// Delete class
const deleteClass = async (req, res) => {

    try {

        const data = await classService.deleteClass(req.params.id);

        return sendSuccess(res, data, "Class deleted", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to delete class", 500);
    }
};

module.exports = {
    createClass,
    getClassesBySchool,
    getClassById,
    updateClass,
    deleteClass
};