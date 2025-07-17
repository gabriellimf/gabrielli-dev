const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  reference: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
  amount: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;