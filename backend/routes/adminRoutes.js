const express = require("express")
const { adminLogin } = require("../controller/AdminController");
const { verifyToken, isAdmin } = require("../middleware/verifytoken");
const router = express.Router();
router.post("/login", adminLogin);
router.get("/main", verifyToken, isAdmin, (req, res) => {
    res.json({ message: "Welcome admin!" });
});

module.exports = router  
