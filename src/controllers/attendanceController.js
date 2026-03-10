const attendanceService = require('../services/attendanceService');
const { sendSuccess, sendError } = require('../utils/responseHandler');

const markAttendance = async (req, res) => {
    try {
        const data = await attendanceService.markAttendance(req.body);
        return sendSuccess(res, data, "Attendance marked successfully", 201);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to mark attendance", 500);
    }
};

const getAttendanceByStudent = async (req, res) => {
    try {
        const data = await attendanceService.getAttendanceByStudent(req.params.studentId);
        return sendSuccess(res, data, "Attendance records fetched", 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to fetch attendance", 500);
    }
};

const getAttendanceByClassDate = async (req, res) => {
    try {
        const data = await attendanceService.getAttendanceByClassDate(
            req.params.classId,
            req.params.sectionId,
            req.params.date
        );
        return sendSuccess(res, data, "Attendance fetched", 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to fetch attendance", 500);
    }
};

const updateAttendance = async (req, res) => {
    try {
        const data = await attendanceService.updateAttendance(req.params.id, req.body);
        return sendSuccess(res, data, "Attendance updated", 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to update attendance", 500);
    }
};

const deleteAttendance = async (req, res) => {
    try {
        const data = await attendanceService.deleteAttendance(req.params.id);
        return sendSuccess(res, data, "Attendance deleted", 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Failed to delete attendance", 500);
    }
};

module.exports = {
    markAttendance,
    getAttendanceByStudent,
    getAttendanceByClassDate,
    updateAttendance,
    deleteAttendance
};