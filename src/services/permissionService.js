const db = require('../config/db');

const permissionService = {

    // Create permission
    async createPermission(data) {

        const query = `
        INSERT INTO permissions
        (
            permission_id,
            name,
            module,
            description,
            created_at
        )
        VALUES
        (
            gen_random_uuid(),
            $1,$2,$3,NOW()
        )
        RETURNING *
        `;

        const values = [
            data.name,
            data.module,
            data.description
        ];

        const result = await db.query(query, values);

        return result.rows[0];
    },

    // Get all permissions
    async getAllPermissions() {

        const result = await db.query(
            `SELECT * FROM permissions ORDER BY module`
        );

        return result.rows;
    },

    // Get permission by id
    async getPermissionById(id) {

        const result = await db.query(
            `SELECT * FROM permissions WHERE permission_id = $1`,
            [id]
        );

        return result.rows[0];
    },

    // Update permission
    async updatePermission(id, data) {

        const query = `
        UPDATE permissions
        SET
            name = $1,
            module = $2,
            description = $3
        WHERE permission_id = $4
        RETURNING *
        `;

        const values = [
            data.name,
            data.module,
            data.description,
            id
        ];

        const result = await db.query(query, values);

        return result.rows[0];
    },

    // Delete permission
    async deletePermission(id) {

        const result = await db.query(
            `DELETE FROM permissions WHERE permission_id = $1 RETURNING *`,
            [id]
        );

        return result.rows[0];
    }

};

module.exports = permissionService;