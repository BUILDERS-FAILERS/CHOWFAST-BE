import mongoose from "mongoose";

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;
const MenuItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
    required: true
  }
});

const MenuItemModel = mongoose.model("MenuItem", MenuItemSchema);

export default MenuItemModel;
