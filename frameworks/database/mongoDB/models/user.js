import mongoose from "mongoose";

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  role: {
    type: String,
    default: "test_user"
  },
  addresses: [
    {
      address: String
    }
  ],
  phoneNumber: {
    type: String,
    unique: true,
    required: true
  },
  paymentInfo: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order"
    }
  ],
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FavoriteMenu"
    }
  ],
  createdAt: Date
});

UserSchema.index({ role: 1 });

const UserModel = mongoose.model("User", UserSchema);

// UserModel.createIndexes().then(() => {
//     console.log("Indexes created successfully.");
//   }).catch(err => {
//     console.error("Error creating indexes:", err);
//   });

export default UserModel;
