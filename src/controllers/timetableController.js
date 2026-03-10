const timetableService = require('../services/timetableService');
const { sendSuccess, sendError } = require('../utils/responseHandler');

const createTimetable = async (req, res) => {
    try {
        const data = await timetableService.createTimetable(req.body);
        return sendSuccess(res, data, "Timetable created successfully", 201);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to create timetable", 500);
    }
};

const getTimetablesByClassSection = async (req, res) => {
    try {
        const data = await timetableService.getTimetablesByClassSection(req.params.classId, req.params.sectionId);
        return sendSuccess(res, data, "Timetables fetched", 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to fetch timetables", 500);
    }
};

const getTimetableById = async (req, res) => {
    try {
        const data = await timetableService.getTimetableById(req.params.id);
        return sendSuccess(res, data, "Timetable fetched", 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to fetch timetable", 500);
    }
};

const updateTimetable = async (req, res) => {
    try {
        const data = await timetableService.updateTimetable(req.params.id, req.body);
        return sendSuccess(res, data, "Timetable updated", 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to update timetable", 500);
    }
};

const deleteTimetable = async (req, res) => {
    try {
        const data = await timetableService.deleteTimetable(req.params.id);
        return sendSuccess(res, data, "Timetable deleted", 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to delete timetable", 500);
    }
};

module.exports = {
    createTimetable,
    getTimetablesByClassSection,
    getTimetableById,
    updateTimetable,
    deleteTimetable
};