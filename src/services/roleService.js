const db = require('../config/db');

const roleService = {

    // Create Role
    async createRole(data) {

        const query = `
        INSERT INTO roles
        (
            role_id,
            school_id,
            name,
            description,
            is_system_role,
            created_at
        )
        VALUES
        (
            gen_random_uuid(),
            $1,$2,$3,$4,NOW()
        )
        RETURNING *
        `;

        const values = [
            data.school_id,
            data.name,
            data.description,
            data.is_system_role
        ];

        const result = await db.query(query, values);

        return result.rows[0];
    },

    // Get roles by school
    async getRolesBySchool(school_id) {

        const result = await db.query(
            `SELECT * FROM roles WHERE school_id = $1 ORDER BY created_at DESC`,
            [school_id]
        );

        return result.rows;
    },

    // Get role by ID
    async getRoleById(role_id) {

        const result = await db.query(
            `SELECT * FROM roles WHERE role_id = $1`,
            [role_id]
        );

        return result.rows[0];
    },

    // Update role
    async updateRole(role_id, data) {

        const query = `
        UPDATE roles
        SET
            name = $1,
            description = $2,
            is_system_role = $3
        WHERE role_id = $4
        RETURNING *
        `;

        const values = [
            data.name,
            data.description,
            data.is_system_role,
            role_id
        ];

        const result = await db.query(query, values);

        return result.rows[0];
    },

    // Delete role
    async deleteRole(role_id) {

        const result = await db.query(
            `DELETE FROM roles WHERE role_id = $1 RETURNING *`,
            [role_id]
        );

        return result.rows[0];
    }

};

module.exports = roleService;