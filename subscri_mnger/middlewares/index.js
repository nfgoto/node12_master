const commonMiddleware = require("./common");

// register all middleware handlers
module.exports = function Middleware(app) {
  commonMiddleware(app);
};
