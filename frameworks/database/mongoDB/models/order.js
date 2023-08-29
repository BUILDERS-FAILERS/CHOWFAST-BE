const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  menuItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MenuItem",
    required: true
  },
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "delivered"],
    default: "pending"
  },
  totalAmount: {
    type: Number,
    required: true
  },
  orderItems: [orderItemSchema], // Embed orderitems, since we won't need to be calling it seperately
  deliveryPerson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DeliveryPerson"
  }
});

const OrderModel = mongoose.model("Order", orderSchema);

module.exports = OrderModel;
