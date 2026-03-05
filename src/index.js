require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Config and Routes
const db = require('./config/db'); // Connecting to the database
const sampleRoutes = require('./routes/sampleRoutes');

// Basic route
app.get('/', (req, res) => {
    res.send('SMS Backend is running');
});

// App Routes
app.use('/api/sample', sampleRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
