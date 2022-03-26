const express = require("express");
const router = express.Router();

const { isHost } = require("../middlewares/isHost");
const { isAdmin } = require("../middlewares/isAdmin");
const { isLoggedIn } = require("../middlewares/isLoggedIn");

const {getAllRequestsToHost,} = require('../controllers/User')
const {acceptRequest,rejectRequest} = require('../controllers/Host')

Router.post("/makeBooking/createOrder");
Router.post("/makeBooking/razor/callback");
Router.post("/razor/callback");
Router.get('/getAllRequestsToHost',isHost,getAllRequestsToHost)
Router.post('/acceptRequest',isHost,acceptRequest)
Router.post('/rejectRequest',isHost,rejectRequest)

module.exports = Router;
