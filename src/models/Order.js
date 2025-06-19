const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  user: { type: String, required: true },
  status: { type: String, default: 'pendiente' },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema); 