import mqtt from 'async-mqtt';

let client;

const printDevices = () => {
  client.publish(`${process.env.TOPIC_NAME}/bridge/devices`);
};

client.on('connect', () => {
  console.log('Connected to the Zigbee Network');

  printDevices();
});

export const connect = () => {
  client = mqtt.connect(process.env.MQTT_HOST);
};

export default client;