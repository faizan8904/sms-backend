const db = require('../config/db');

const schoolService = {

    // Create school
    async createSchool(data) {
        const query = `
        INSERT INTO schools
        (
            name, code, email, phone, website, logo_url,
            address_line1, address_line2, city, state,
            postal_code, country, timezone, currency,
            subscription_plan_id, subscription_start_date,
            subscription_end_date, status, created_at, updated_at
        )
        VALUES
        (
            $1,$2,$3,$4,$5,$6,
            $7,$8,$9,$10,
            $11,$12,$13,$14,
            $15,$16,$17,$18,NOW(),NOW()
        )
        RETURNING *
        `;

        const values = [
            data.name,
            data.code,
            data.email,
            data.phone,
            data.website,
            data.logo_url,
            data.address_line1,
            data.address_line2,
            data.city,
            data.state,
            data.postal_code,
            data.country,
            data.timezone,
            data.currency,
            data.subscription_plan_id,
            data.subscription_start_date,
            data.subscription_end_date,
            data.status
        ];

        const result = await db.query(query, values);
        return result.rows[0];
    },

    // Get all schools
    async getAllSchools() {
        const result = await db.query(
            `SELECT * FROM schools ORDER BY created_at DESC`
        );
        return result.rows;
    },

    // Get school by id
    async getSchoolById(id) {
        const result = await db.query(
            `SELECT * FROM schools WHERE id = $1`,
            [id]
        );
        return result.rows[0];
    },

    // Update school
    async updateSchool(id, data) {
        const query = `
        UPDATE schools
        SET
            name = $1,
            code = $2,
            email = $3,
            phone = $4,
            website = $5,
            logo_url = $6,
            address_line1 = $7,
            address_line2 = $8,
            city = $9,
            state = $10,
            postal_code = $11,
            country = $12,
            timezone = $13,
            currency = $14,
            subscription_plan_id = $15,
            subscription_start_date = $16,
            subscription_end_date = $17,
            status = $18,
            updated_at = NOW()
        WHERE id = $19
        RETURNING *
        `;

        const values = [
            data.name,
            data.code,
            data.email,
            data.phone,
            data.website,
            data.logo_url,
            data.address_line1,
            data.address_line2,
            data.city,
            data.state,
            data.postal_code,
            data.country,
            data.timezone,
            data.currency,
            data.subscription_plan_id,
            data.subscription_start_date,
            data.subscription_end_date,
            data.status,
            id
        ];

        const result = await db.query(query, values);
        return result.rows[0];
    },

    // Delete school
    async deleteSchool(id) {
        const result = await db.query(
            `DELETE FROM schools WHERE id = $1 RETURNING *`,
            [id]
        );

        return result.rows[0];
    }

};

module.exports = schoolService;