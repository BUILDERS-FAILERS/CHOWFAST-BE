const mongoose = require("mongoose");

const foodCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  logo: {
    type: String, // logo storage url
    required: true
  }
});

const FoodCategoryModel = mongoose.model("FoodCategory", foodCategorySchema);

module.exports = FoodCategoryModel;
