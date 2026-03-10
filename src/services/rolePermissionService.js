const db = require('../config/db');

const rolePermissionService = {

    // Assign permission to role
    async assignPermission(data) {

        const query = `
        INSERT INTO role_permissions
        (
            role_permission_id,
            role_id,
            permission_id,
            created_at
        )
        VALUES
        (
            gen_random_uuid(),
            $1,
            $2,
            NOW()
        )
        RETURNING *
        `;

        const values = [
            data.role_id,
            data.permission_id
        ];

        const result = await db.query(query, values);

        return result.rows[0];
    },

    // Get permissions by role
    async getPermissionsByRole(role_id) {

        const query = `
        SELECT
            p.permission_id,
            p.name,
            p.module,
            p.description
        FROM role_permissions rp
        JOIN permissions p
        ON rp.permission_id = p.permission_id
        WHERE rp.role_id = $1
        `;

        const result = await db.query(query, [role_id]);

        return result.rows;
    },

    // Remove permission from role
    async removePermission(role_id, permission_id) {

        const query = `
        DELETE FROM role_permissions
        WHERE role_id = $1
        AND permission_id = $2
        RETURNING *
        `;

        const result = await db.query(query, [role_id, permission_id]);

        return result.rows[0];
    },

    // Get all role-permission mappings
    async getAllRolePermissions() {

        const query = `
        SELECT
            rp.role_permission_id,
            r.name AS role_name,
            p.name AS permission_name,
            p.module
        FROM role_permissions rp
        JOIN roles r ON rp.role_id = r.role_id
        JOIN permissions p ON rp.permission_id = p.permission_id
        ORDER BY r.name
        `;

        const result = await db.query(query);

        return result.rows;
    }

};

module.exports = rolePermissionService;