const { Pool } = require('pg');

// This file is responsible for establishing a connection to the database.
// By separating the DB connection into this config folder, we make our app more modular
// and easier to maintain. We can require this file wherever we need database access.

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
    console.log('Connected to the database successfully');
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = {
    // Exporting the `query` method directly so we don't have to import the entire pool
    query: (text, params) => pool.query(text, params),
    pool
};
