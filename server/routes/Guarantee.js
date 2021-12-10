const express = require("express");
const router = express.Router();
const {getGuanranteebyGuarantorId, createGuarantee} = require("../controller/Guarantee.js")



router.get("/:guarantorId", getGuanranteebyGuarantorId);
router.post("/", createGuarantee); 

module.exports = router;