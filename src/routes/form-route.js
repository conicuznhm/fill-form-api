const express = require("express");
const formController = require("../controllers/form-controller");

const router = express.Router();

router.post("/fill", formController.fill);
router.get("/fill", formController.getAllDetails);
router.get("/fill/:id", formController.getDetail);

module.exports = router;
