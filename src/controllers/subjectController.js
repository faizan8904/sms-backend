const subjectService = require('../services/subjectService');
const { sendSuccess, sendError } = require('../utils/responseHandler');

const createSubject = async (req, res) => {
    try {
        const data = await subjectService.createSubject(req.body);
        return sendSuccess(res, data, "Subject created successfully", 201);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to create subject", 500);
    }
};

const getSubjectsByClass = async (req, res) => {
    try {
        const data = await subjectService.getSubjectsByClass(req.params.classId);
        return sendSuccess(res, data, "Subjects fetched", 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to fetch subjects", 500);
    }
};

const getSubjectById = async (req, res) => {
    try {
        const data = await subjectService.getSubjectById(req.params.id);
        return sendSuccess(res, data, "Subject fetched", 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to fetch subject", 500);
    }
};

const updateSubject = async (req, res) => {
    try {
        const data = await subjectService.updateSubject(req.params.id, req.body);
        return sendSuccess(res, data, "Subject updated", 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to update subject", 500);
    }
};

const deleteSubject = async (req, res) => {
    try {
        const data = await subjectService.deleteSubject(req.params.id);
        return sendSuccess(res, data, "Subject deleted", 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to delete subject", 500);
    }
};

module.exports = {
    createSubject,
    getSubjectsByClass,
    getSubjectById,
    updateSubject,
    deleteSubject
};