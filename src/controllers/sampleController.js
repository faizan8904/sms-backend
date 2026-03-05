const { sendSuccess, sendError } = require('../utils/responseHandler');
const sampleService = require('../services/sampleService');

// This is a controller file.
// Controllers are meant to receive HTTP requests, extract data from params/body/query,
// pass it to the service layer for processing, and then return an HTTP response.
// They should ideally contain very little business logic.

/**
 * Controller for getting sample data.
 */
const getSampleHandler = async (req, res) => {
    try {
        // Call the service layer to get data
        const data = await sampleService.getSampleData();

        // Use our utility to send a standardized success response
        return sendSuccess(res, data, 'Successfully fetched sample data', 200);
    } catch (error) {
        console.error('Error in getSampleHandler:', error);
        // Use our utility to send a standardized error response
        return sendError(res, 'Failed to fetch sample data', 500);
    }
};

module.exports = {
    getSampleHandler
};
