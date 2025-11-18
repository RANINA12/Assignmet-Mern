const express = require("express")
const { ConsultationForm, SubscribeRequest } = require("../controller/UserRequestContoller")
const router = express.Router();
router.post("/SubscribeRequest", SubscribeRequest);
router.post("/ConsultRequest", ConsultationForm);

module.exports = router  