const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  brokers: [process.env.KAFKA_BROKER],
});

const producer = kafka.producer();

async function kafkaProducer() {
  await producer.connect();
  console.log('Productor Kafka conectado');
}

module.exports = { producer, kafkaProducer }; 