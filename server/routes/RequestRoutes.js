const express = require("express");
const Router = express.Router();

Router.post("/makeBooking/createOrder");
Router.post("/makeBooking/razor/callback");
Router.post("/razor/callback");

module.exports = Router;