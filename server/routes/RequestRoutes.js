const express = require("express");
const router = express.Router();

router.post("/makeBooking/createOrder");
router.post("/makeBooking/razor/callback");
router.post("/razor/callback");

module.exports = router;
