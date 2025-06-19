require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { kafkaProducer } = require('./kafka/producer');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json());

// Rutas
app.use('/api/orders', orderRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch((err) => console.error('Error conectando a MongoDB:', err));

// Inicializar Kafka Producer
kafkaProducer();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
}); 