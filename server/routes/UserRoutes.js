const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  jwtVerify
} = require("../controllers/User");

const {
  createHost,
  getPendingHosts,
  getHost,
  approveHost,
  rejectHost,
  getAllHosts,
} = require("../controllers/Host");

const { isHost } = require("../middlewares/isHost");
const { isAdmin } = require("../middlewares/isAdmin");

router.post("/signup", signup);
router.post("/signup", signup);
router.post("/jwtVerify",jwtVerify);
router.post("/login", login);
router.post("/createHost",isHost,createHost);
router.get('/getPendingHosts',isAdmin,getPendingHosts)
router.get('/getHost/:id',getHost);
router.post('/approveHost',isAdmin,approveHost);
router.post('/rejectHost',isAdmin,rejectHost);
router.get('/getAllHosts',getAllHosts);


module.exports = router;