const express = require("express");
const itemController = require("../../controllers/itemController");
const router = express.Router();

router.get("/", itemController.items_index);
router.post("/", itemController.items_index_post);
router.delete("/:id", itemController.items_details_delete);
router.put("/:id", itemController.items_details_update);

module.exports = router;
