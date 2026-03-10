const db = require('../config/db');

const subscriptionPlanService = {

    // Create plan
    async createPlan(data) {

        const query = `
        INSERT INTO subscription_plans
        (
            name,
            description,
            monthly_price,
            yearly_price,
            allowed_users,
            allowed_schools,
            allowed_students,
            allowed_modules,
            features,
            duration,
            trial_support,
            status
        )
        VALUES
        (
            $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12
        )
        RETURNING *
        `;

        const values = [
            data.name,
            data.description,
            data.monthly_price,
            data.yearly_price,
            data.allowed_users,
            data.allowed_schools,
            data.allowed_students,
            data.allowed_modules,
            data.features,
            data.duration,
            data.trial_support,
            data.status
        ];

        const result = await db.query(query, values);

        return result.rows[0];
    },

    // Get all plans
    async getAllPlans() {

        const result = await db.query(
            `SELECT * FROM subscription_plans ORDER BY plan_id ASC`
        );

        return result.rows;
    },

    // Get plan by id
    async getPlanById(id) {

        const result = await db.query(
            `SELECT * FROM subscription_plans WHERE plan_id = $1`,
            [id]
        );

        return result.rows[0];
    },

    // Update plan
    async updatePlan(id, data) {

        const query = `
        UPDATE subscription_plans
        SET
            name = $1,
            description = $2,
            monthly_price = $3,
            yearly_price = $4,
            allowed_users = $5,
            allowed_schools = $6,
            allowed_students = $7,
            allowed_modules = $8,
            features = $9,
            duration = $10,
            trial_support = $11,
            status = $12
        WHERE plan_id = $13
        RETURNING *
        `;

        const values = [
            data.name,
            data.description,
            data.monthly_price,
            data.yearly_price,
            data.allowed_users,
            data.allowed_schools,
            data.allowed_students,
            data.allowed_modules,
            data.features,
            data.duration,
            data.trial_support,
            data.status,
            id
        ];

        const result = await db.query(query, values);

        return result.rows[0];
    },

    // Delete plan
    async deletePlan(id) {

        const result = await db.query(
            `DELETE FROM subscription_plans WHERE plan_id = $1 RETURNING *`,
            [id]
        );

        return result.rows[0];
    }

};

module.exports = subscriptionPlanService;