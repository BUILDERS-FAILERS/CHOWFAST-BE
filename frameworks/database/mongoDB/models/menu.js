const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  menuItems: [
    {
      menuItemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem",
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FoodCategory"
    }
  ]
});

const MenuModel = mongoose.model("Menu", menuSchema);

module.exports = MenuModel;
