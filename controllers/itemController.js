const Item = require("../models/item");

// get all items (public)
const items_index = async (req, res) => {
  try {
    const items = await Item.find().sort({ date: -1 });
    res.json(items);
  } catch (err) {
    console.log(err);
    res.json({ error: "could not find items" });
  }
};

// post new item (public)
const items_index_post = async (req, res) => {
  try {
    const newItem = await new Item({
      name: req.body.name,
    });
    newItem.save();
    res.json(newItem);
  } catch (err) {
    console.log(err);
    res.json({ error: "item failed to post" });
  }
};

// delete an item (public)
const items_details_delete = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    await item.remove();
    res.json({ deleted: true });
  } catch {
    console.log(err);
    res.status(404).json({ error: "item failed to delete" });
  }
};

// update an item (public)
const items_details_update = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    Object.assign(item, req.body);
    item.save();
    res.json(item);
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "item failed to update" });
  }
};

module.exports = {
  items_index,
  items_index_post,
  items_details_delete,
  items_details_update,
};
