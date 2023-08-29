export default function payment(orderId, status, amount, date) {
    return {
        getOrderId: () => orderId,
        getStatus: () => status,
        getAmount: () => amount,
        getDate: () => date
    }
}


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    required: true
  },
  addresses: [
    {
      address: String
    }
  ],
  phoneNumber: {
    type: String,
    required: true
  },
  paymentInfo: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order'
    }
  ],
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FavoriteMenu'
    }
  ],
  createdAt: {
    type: Date,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
