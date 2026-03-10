require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const subscriptionPlanRoutes = require('./routes/subscriptionPlanRoutes');
const schoolRoutes = require('./routes/schoolRoutes');
const roleRoutes = require('./routes/roleRoutes');
const permissionRoutes = require('./routes/permissionRoutes');
const rolePermissionRoutes = require('./routes/rolePermissionRoutes');
const userRoutes = require('./routes/userRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const classRoutes = require('./routes/classRoutes');
const sectionRoutes = require('./routes/sectionRoutes');
const subjectRoutes = require('./routes/subjectRoutes');
const timetableRoutes = require('./routes/timetableRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');

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
app.use('/api/subscription-plans', subscriptionPlanRoutes);
app.use('/api/schools', schoolRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/permissions', permissionRoutes);
app.use('/api/role-permissions', rolePermissionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/sections', sectionRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/timetables', timetableRoutes);
app.use('/api/attendance', attendanceRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
