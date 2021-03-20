import mqtt from 'async-mqtt';

const client = mqtt.connect(process.env.MQTT_HOST);

client.on('connect', () => {
  console.log('Connected to the Zigbee Network');
});

export default client;