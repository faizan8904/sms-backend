const db = require('../config/db');

const sectionService = {

    // Create section
    async createSection(data) {
        const query = `
        INSERT INTO sections
        (
            section_id,
            school_id,
            class_id,
            section_name,
            section_code,
            class_teacher_id,
            created_at,
            updated_at
        )
        VALUES
        (
            gen_random_uuid(),
            $1,
            $2,
            $3,
            $4,
            $5,
            NOW(),
            NOW()
        )
        RETURNING *`;

        const values = [
            data.school_id,
            data.class_id,
            data.section_name,
            data.section_code,
            data.class_teacher_id || null
        ];

        const result = await db.query(query, values);
        return result.rows[0];
    },

    // Get all sections for a class
    async getSectionsByClass(class_id) {
        const result = await db.query(
            `SELECT * FROM sections WHERE class_id = $1 ORDER BY section_name`,
            [class_id]
        );
        return result.rows;
    },

    // Get section by ID
    async getSectionById(section_id) {
        const result = await db.query(
            `SELECT * FROM sections WHERE section_id = $1`,
            [section_id]
        );
        return result.rows[0];
    },

    // Update section
    async updateSection(section_id, data) {
        const query = `
        UPDATE sections
        SET
            section_name = $1,
            section_code = $2,
            class_teacher_id = $3,
            updated_at = NOW()
        WHERE section_id = $4
        RETURNING *`;

        const values = [
            data.section_name,
            data.section_code,
            data.class_teacher_id || null,
            section_id
        ];

        const result = await db.query(query, values);
        return result.rows[0];
    },

    // Delete section
    async deleteSection(section_id) {
        const result = await db.query(
            `DELETE FROM sections WHERE section_id = $1 RETURNING *`,
            [section_id]
        );
        return result.rows[0];
    }
};

module.exports = sectionService;