const db = require('../config/db');

// This is a service file.
// Services are responsible for handling the core business logic and database interactions.
// By keeping logic here, controllers stay thin and only handle HTTP requests and responses.

/**
 * Fetches sample data from the database.
 * @returns {Promise<Array>} List of sample records
 */
const getSampleData = async () => {
    // Example of using the db config we created:
    // const result = await db.query('SELECT * FROM some_table');
    // return result.rows;

    // Returning mock data for demonstration purposes
    return [
        { id: 1, name: 'Sample Item 1' },
        { id: 2, name: 'Sample Item 2' }
    ];
};

module.exports = {
    getSampleData
};
