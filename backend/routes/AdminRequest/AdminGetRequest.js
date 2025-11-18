const express = require("express")
const { FetchForm, FetchSubscriber } = require("../../controller/AdminRequest");
const { verifyToken, isAdmin } = require("../../middleware/verifytoken")
const router = express.Router();
router.get("/view-all-request", verifyToken, isAdmin, FetchForm);
router.get("/view-subscriber-email", verifyToken, isAdmin, FetchSubscriber);
module.exports = router

