const express = require("express");
const router = express.Router();

const listController = require("../controllers/listController");

router.get("/api/lists", listController.index);
router.get(`/api/lists/:id`, listController.listById)
router.post("/api/lists/create", listController.create)
router.post(`/api/lists/:id/destroy`, listController.destroy)
router.post(`/api/lists/:id/update`, listController.update)


module.exports = router;
