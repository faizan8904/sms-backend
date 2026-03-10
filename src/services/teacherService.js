const db = require('../config/db');

const teacherService = {

    // Create teacher
    async createTeacher(data) {

        const query = `
        INSERT INTO teachers
        (
            teacher_id,
            school_id,
            user_id,
            employee_code,
            first_name,
            last_name,
            gender,
            date_of_birth,
            phone_number,
            email,
            profile_photo,
            address_line1,
            address_line2,
            city,
            state,
            postal_code,
            country,
            joining_date,
            employment_type,
            department_id,
            designation,
            experience_years,
            qualification,
            specialization,
            status,
            created_at,
            updated_at
        )
        VALUES
        (
            gen_random_uuid(),
            $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,
            $11,$12,$13,$14,$15,$16,$17,$18,$19,
            $20,$21,$22,$23,$24,NOW(),NOW()
        )
        RETURNING *
        `;

        const values = [
            data.school_id,
            data.user_id,
            data.employee_code,
            data.first_name,
            data.last_name,
            data.gender,
            data.date_of_birth,
            data.phone_number,
            data.email,
            data.profile_photo,
            data.address_line1,
            data.address_line2,
            data.city,
            data.state,
            data.postal_code,
            data.country,
            data.joining_date,
            data.employment_type,
            data.department_id,
            data.designation,
            data.experience_years,
            data.qualification,
            data.specialization,
            data.status
        ];

        const result = await db.query(query, values);

        return result.rows[0];
    },

    // Get teachers by school
    async getTeachersBySchool(school_id) {

        const result = await db.query(
            `SELECT * FROM teachers WHERE school_id = $1 ORDER BY created_at DESC`,
            [school_id]
        );

        return result.rows;
    },

    // Get teacher by ID
    async getTeacherById(teacher_id) {

        const result = await db.query(
            `SELECT * FROM teachers WHERE teacher_id = $1`,
            [teacher_id]
        );

        return result.rows[0];
    },

    // Update teacher
    async updateTeacher(teacher_id, data) {

        const query = `
        UPDATE teachers
        SET
            employee_code = $1,
            first_name = $2,
            last_name = $3,
            phone_number = $4,
            email = $5,
            designation = $6,
            qualification = $7,
            specialization = $8,
            experience_years = $9,
            status = $10,
            updated_at = NOW()
        WHERE teacher_id = $11
        RETURNING *
        `;

        const values = [
            data.employee_code,
            data.first_name,
            data.last_name,
            data.phone_number,
            data.email,
            data.designation,
            data.qualification,
            data.specialization,
            data.experience_years,
            data.status,
            teacher_id
        ];

        const result = await db.query(query, values);

        return result.rows[0];
    },

    // Delete teacher
    async deleteTeacher(teacher_id) {

        const result = await db.query(
            `DELETE FROM teachers WHERE teacher_id = $1 RETURNING *`,
            [teacher_id]
        );

        return result.rows[0];
    }

};

module.exports = teacherService;