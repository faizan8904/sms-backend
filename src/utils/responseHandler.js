// This is a utility file.
// Utilities (utils) are small, reusable functions that aren't tied to a specific business logic.
// For example, formatting dates, handling errors, or generating standard API responses.

/**
 * Sends a standard success response.
 * @param {Object} res - Express response object
 * @param {any} data - The data to send in the response
 * @param {string} message - A success message
 * @param {number} statusCode - HTTP status code (default 200)
 */
const sendSuccess = (res, data = null, message = 'Success', statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data
    });
};

/**
 * Sends a standard error response.
 * @param {Object} res - Express response object
 * @param {string} message - The error message
 * @param {number} statusCode - HTTP status code (default 500)
 */
const sendError = (res, message = 'Internal Server Error', statusCode = 500) => {
    return res.status(statusCode).json({
        success: false,
        message
    });
};

module.exports = {
    sendSuccess,
    sendError
};
