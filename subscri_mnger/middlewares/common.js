const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const express = require("express");

module.exports = function commonMiddleware(app) {
  app.use(cors());
  app.use(express.json());
  app.use(helmet());
  app.use(morgan("common"));
};
