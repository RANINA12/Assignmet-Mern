const express = require("express")
const { AddClient, AddProduct } = require("../../controller/AdminRequest");
const upload = require("../../middleware/multer");
const { verifyToken, isAdmin } = require("../../middleware/verifytoken")
const router = express.Router();
router.post("/Add/Product", verifyToken, isAdmin, upload.single("image"), AddProduct);
router.post("/Add/Client", verifyToken, isAdmin, upload.single("image"), AddClient);

module.exports = router  