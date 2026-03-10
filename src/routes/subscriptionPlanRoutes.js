const express = require('express');

const router = express.Router();

const subscriptionPlanController = require('../controllers/subscriptionPlanController');

router.post('/', subscriptionPlanController.createPlan);

router.get('/', subscriptionPlanController.getAllPlans);

router.get('/:id', subscriptionPlanController.getPlanById);

router.put('/:id', subscriptionPlanController.updatePlan);

router.delete('/:id', subscriptionPlanController.deletePlan);

module.exports = router;