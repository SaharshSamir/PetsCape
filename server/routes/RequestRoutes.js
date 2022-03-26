const express = require("express");
const router = express.Router();

const { isHost } = require("../middlewares/isHost");
const { isAdmin } = require("../middlewares/isAdmin");
const { isLoggedIn } = require("../middlewares/isLoggedIn");

const {getAllRequestsToHost,} = require('../controllers/User')
const {acceptRequest,rejectRequest} = require('../controllers/Host')

router.post("/makeBooking/createOrder");
router.post("/makeBooking/razor/callback");
router.post("/razor/callback");
router.get('/getAllRequestsToHost',isHost,getAllRequestsToHost)
router.post('/acceptRequest',isHost,acceptRequest)
router.post('/rejectRequest',isHost,rejectRequest)

module.exports = router;
