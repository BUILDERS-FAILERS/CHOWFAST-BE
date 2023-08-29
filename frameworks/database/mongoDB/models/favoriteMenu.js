const mongoose = require("mongoose");

const favoriteMenuSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  menuId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
    required: true
  }
});

const FavoriteMenuModel = mongoose.model("FavoriteMenu", favoriteMenuSchema);

module.exports = FavoriteMenuModel;
