const sectionService = require('../services/sectionService');
const { sendSuccess, sendError } = require('../utils/responseHandler');

// Create section
const createSection = async (req, res) => {
    try {
        const data = await sectionService.createSection(req.body);
        return sendSuccess(res, data, "Section created successfully", 201);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to create section", 500);
    }
};

// Get all sections for a class
const getSectionsByClass = async (req, res) => {
    try {
        const data = await sectionService.getSectionsByClass(req.params.classId);
        return sendSuccess(res, data, "Sections fetched", 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to fetch sections", 500);
    }
};

// Get section by ID
const getSectionById = async (req, res) => {
    try {
        const data = await sectionService.getSectionById(req.params.id);
        return sendSuccess(res, data, "Section fetched", 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to fetch section", 500);
    }
};

// Update section
const updateSection = async (req, res) => {
    try {
        const data = await sectionService.updateSection(req.params.id, req.body);
        return sendSuccess(res, data, "Section updated", 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to update section", 500);
    }
};

// Delete section
const deleteSection = async (req, res) => {
    try {
        const data = await sectionService.deleteSection(req.params.id);
        return sendSuccess(res, data, "Section deleted", 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to delete section", 500);
    }
};

module.exports = {
    createSection,
    getSectionsByClass,
    getSectionById,
    updateSection,
    deleteSection
};