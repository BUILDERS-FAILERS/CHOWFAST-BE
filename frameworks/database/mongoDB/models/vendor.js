const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true  // to avoid some sort of impersonation.
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  paymentInfo: { String },
  logo: {
    type: String,
    required: true
  }
});

const VendorModel = mongoose.model("Vendor", vendorSchema);

module.exports = VendorModel;
