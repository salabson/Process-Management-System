const express = require("express");

const router = express.Router();

const { getGuarantors, createGuarantors, updateGuarantor, deleteGuarantor } = require("../controller/Guarantor")

// routes
router.get("/", getGuarantors);
router.post("/", createGuarantors);
router.patch("/:id", updateGuarantor);
router.delete("/:id", deleteGuarantor);

module.exports = router;
