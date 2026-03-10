const schoolService = require('../services/schoolService');
const { sendSuccess, sendError } = require('../utils/responseHandler');

// Create School
const createSchool = async (req, res) => {
    try {
        const data = await schoolService.createSchool(req.body);
        return sendSuccess(res, data, "School created successfully", 201);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to create school", 500);
    }
};

// Get All Schools
const getAllSchools = async (req, res) => {
    try {

        const schoolId = req.school_id;

        const data = await schoolService.getSchoolById(schoolId);

        return sendSuccess(res, data, "School fetched", 200);

    } catch (error) {
        console.error(error);
        return sendError(res, "Error fetching school", 500);
    }
};

// Get School by ID
const getSchoolById = async (req, res) => {
    try {
        const data = await schoolService.getSchoolById(req.params.id);
        return sendSuccess(res, data, "School fetched successfully", 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to fetch school", 500);
    }
};

// Update School
const updateSchool = async (req, res) => {
    try {
        const data = await schoolService.updateSchool(req.params.id, req.body);
        return sendSuccess(res, data, "School updated successfully", 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to update school", 500);
    }
};

// Delete School
const deleteSchool = async (req, res) => {
    try {
        const data = await schoolService.deleteSchool(req.params.id);
        return sendSuccess(res, data, "School deleted successfully", 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to delete school", 500);
    }
};

module.exports = {
    createSchool,
    getAllSchools,
    getSchoolById,
    updateSchool,
    deleteSchool
};