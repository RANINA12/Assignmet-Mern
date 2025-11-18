const express = require("express")
const { displayClient, displayProduct } = require("../controller/userDashboard")
const router = express.Router();
router.get("/getclientreview", displayClient);
router.get("/getproduct", displayProduct)

module.exports = router  
