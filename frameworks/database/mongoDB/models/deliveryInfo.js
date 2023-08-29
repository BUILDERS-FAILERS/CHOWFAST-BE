const mongoose = require("mongoose");

const deliveryInfoSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true
  },
  fee: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ["pending", "in_progress", "delivered"],
    default: "pending"
  },
  estimatedTime: Date,
  delivererDetails: {
    type: String,
    required: true
  }
});

const DeliveryInfoModel = mongoose.model("DeliveryInfo", deliveryInfoSchema);

module.exports = DeliveryInfoModel;
