const express = require("express");
const app = express();
const PORT = process.env.PORT || 3333;
const Middleware = require("./middlewares");

const plansController = require("./controllers/plans-controller");
const subscriptionsController = require("./controllers/subscriptions-controller");

Middleware(app);
app.use("/api/plans", plansController);
app.use("/api/subscriptions", subscriptionsController);

app.listen(PORT, function() {
  console.log(`Listening on poort ${PORT}`);
});
