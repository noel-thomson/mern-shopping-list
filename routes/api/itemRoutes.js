const express = require("express");
const itemController = require("../../controllers/itemController");
const router = express.Router();

// Item Model
const Item = require("../../models/item");

router.get("/", itemController.items_index);
router.post("/", itemController.items_index_post);

module.exports = router;
