const router = require("express").Router();
// all errors caught by async wrapper and sent to error handler - no need for try catch
const asyncWrapper = require("../utilities/async-wrapper");
const SubscriptionService = require("../services/subscription-service");

const subscriptionService = new SubscriptionService();

// GET /api/subscriptions/
router.get(
  "/",
  asyncWrapper(async (req, res) => {
    const userId = null;
    const subscriptions = await subscriptionService.findAll(userId);
    res.send(subscriptions);
  })
);

// GET /api/subscriptions/:id
router.get(
  "/:id",
  asyncWrapper(async (req, res) => {
    const id = req.params.id;
    const userId = null;
    const subscription = await subscriptionService.findOne(id);
    res.send(subscription);
  })
);

// POST /api/subscriptions/
router.post(
  "/",
  asyncWrapper(async (req, res) => {
    const subscription = subscriptionService.create(req.body);
    res.send(subscription);
  })
);

// DELETE /api/subscriptions/:id
router.delete(
  "/:id",
  asyncWrapper(async (req, res) => {
    await subscriptionService.deleteOne(req.params.id);
    res.sendStatus(200);
  })
);

module.exports = router;
