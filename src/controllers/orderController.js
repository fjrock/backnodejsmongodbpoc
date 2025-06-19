const Order = require('../models/Order');
const { producer } = require('../kafka/producer');

exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    // Enviar evento a Kafka
    await producer.send({
      topic: 'orders',
      messages: [{ value: JSON.stringify(order) }],
    });
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 