const Item = require("../models/item");

// get all items (public)
const items_index = (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items))
    .catch((err) => {
      console.log(err);
    });
};

// post new item (public)
const items_index_post = (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem.save().then((item) => res.json(item));
};

module.exports = {
  items_index,
  items_index_post,
};
