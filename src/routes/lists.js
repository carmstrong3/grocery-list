const express = require("express");
const router = express.Router();

const listController = require("../controllers/listController");

router.get("/lists", listController.index);
router.get(`/lists/:id`, listController.listById)

module.exports = router;
