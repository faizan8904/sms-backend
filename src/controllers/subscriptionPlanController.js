const subscriptionPlanService = require('../services/subscriptionPlanService');
const { sendSuccess, sendError } = require('../utils/responseHandler');

const createPlan = async (req, res) => {
    try {

        const data = await subscriptionPlanService.createPlan(req.body);

        return sendSuccess(res, data, "Subscription plan created", 201);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to create plan", 500);
    }
};

const getAllPlans = async (req, res) => {
    try {

        const data = await subscriptionPlanService.getAllPlans();

        return sendSuccess(res, data, "Plans fetched", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to fetch plans", 500);
    }
};

const getPlanById = async (req, res) => {
    try {

        const data = await subscriptionPlanService.getPlanById(req.params.id);

        return sendSuccess(res, data, "Plan fetched", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to fetch plan", 500);
    }
};

const updatePlan = async (req, res) => {
    try {

        const data = await subscriptionPlanService.updatePlan(req.params.id, req.body);

        return sendSuccess(res, data, "Plan updated", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to update plan", 500);
    }
};

const deletePlan = async (req, res) => {
    try {

        const data = await subscriptionPlanService.deletePlan(req.params.id);

        return sendSuccess(res, data, "Plan deleted", 200);

    } catch (error) {

        console.error(error);

        return sendError(res, "Failed to delete plan", 500);
    }
};

module.exports = {
    createPlan,
    getAllPlans,
    getPlanById,
    updatePlan,
    deletePlan
};