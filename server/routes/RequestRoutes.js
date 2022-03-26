const express = require("express");
const Router = express.Router();
const {makeBooking, razorCallback, verifyPayments} = require('../controllers/Request');

Router.post("/makeBooking/createOrder", makeBooking);
Router.post("/makeBooking/razor/callback", razorCallback);
Router.post("/razor/callback", verifyPayments);

module.exports = Router;