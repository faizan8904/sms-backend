const db = require('../config/db');

const userService = {

    // Create user
    async createUser(data) {

        const query = `
        INSERT INTO users
        (
            user_id,
            school_id,
            role_id,
            first_name,
            middle_name,
            last_name,
            email,
            phone,
            username,
            password_hash,
            profile_photo,
            gender,
            date_of_birth,
            status,
            email_verified,
            phone_verified,
            two_factor_enabled,
            login_attempts,
            created_by,
            created_at,
            updated_at
        )
        VALUES
        (
            gen_random_uuid(),
            $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,
            false,false,false,0,$14,NOW(),NOW()
        )
        RETURNING *
        `;

        const values = [
            data.school_id,
            data.role_id,
            data.first_name,
            data.middle_name,
            data.last_name,
            data.email,
            data.phone,
            data.username,
            data.password_hash,
            data.profile_photo,
            data.gender,
            data.date_of_birth,
            data.status,
            data.created_by
        ];

        const result = await db.query(query, values);

        return result.rows[0];
    },

    // Get all users by school
    async getUsersBySchool(school_id) {

        const result = await db.query(
            `SELECT * FROM users WHERE school_id = $1 ORDER BY created_at DESC`,
            [school_id]
        );

        return result.rows;
    },

    // Get user by ID
    async getUserById(user_id) {

        const result = await db.query(
            `SELECT * FROM users WHERE user_id = $1`,
            [user_id]
        );

        return result.rows[0];
    },

    // Update user
    async updateUser(user_id, data) {

        const query = `
        UPDATE users
        SET
            first_name = $1,
            middle_name = $2,
            last_name = $3,
            email = $4,
            phone = $5,
            username = $6,
            profile_photo = $7,
            gender = $8,
            date_of_birth = $9,
            status = $10,
            updated_at = NOW()
        WHERE user_id = $11
        RETURNING *
        `;

        const values = [
            data.first_name,
            data.middle_name,
            data.last_name,
            data.email,
            data.phone,
            data.username,
            data.profile_photo,
            data.gender,
            data.date_of_birth,
            data.status,
            user_id
        ];

        const result = await db.query(query, values);

        return result.rows[0];
    },

    // Delete user
    async deleteUser(user_id) {

        const result = await db.query(
            `DELETE FROM users WHERE user_id = $1 RETURNING *`,
            [user_id]
        );

        return result.rows[0];
    }

};

module.exports = userService;