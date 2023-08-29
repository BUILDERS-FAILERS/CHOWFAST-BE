const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["moderator", "admin", "superadmin"],
    default: "admin" // should be least permission choice
  }
});

const AdminModel = mongoose.model("Admin", adminSchema);

module.exports = AdminModel;
