const db = require('../config/db');

const classService = {

    // Create class
    async createClass(data) {

        const query = `
        INSERT INTO classes
        (
            class_id,
            school_id,
            class_name,
            class_code,
            description,
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
            NOW(),
            NOW()
        )
        RETURNING *
        `;

        const values = [
            data.school_id,
            data.class_name,
            data.class_code,
            data.description
        ];

        const result = await db.query(query, values);

        return result.rows[0];
    },

    // Get classes by school
    async getClassesBySchool(school_id) {

        const result = await db.query(
            `SELECT * FROM classes WHERE school_id = $1 ORDER BY class_name`,
            [school_id]
        );

        return result.rows;
    },

    // Get class by ID
    async getClassById(class_id) {

        const result = await db.query(
            `SELECT * FROM classes WHERE class_id = $1`,
            [class_id]
        );

        return result.rows[0];
    },

    // Update class
    async updateClass(class_id, data) {

        const query = `
        UPDATE classes
        SET
            class_name = $1,
            class_code = $2,
            description = $3,
            updated_at = NOW()
        WHERE class_id = $4
        RETURNING *
        `;

        const values = [
            data.class_name,
            data.class_code,
            data.description,
            class_id
        ];

        const result = await db.query(query, values);

        return result.rows[0];
    },

    // Delete class
    async deleteClass(class_id) {

        const result = await db.query(
            `DELETE FROM classes WHERE class_id = $1 RETURNING *`,
            [class_id]
        );

        return result.rows[0];
    }

};

module.exports = classService;