const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');

// This is a routes file.
// It maps HTTP methods and URLs to specific controller functions.

// Define a GET route at /api/sample
router.get('/', sampleController.getSampleHandler);

module.exports = router;
