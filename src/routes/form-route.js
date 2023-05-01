const express = require("express");
const formController = require("../controllers/form-controller");

const router = express.Router();

router.post("/fill", formController.fill);

module.exports = router;
