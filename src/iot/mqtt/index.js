import mqtt from 'async-mqtt';

let client;

export const connect = async () => {
  client = await mqtt.connectAsync(process.env.MQTT_HOST);
  console.log('Connected to the Zigbee Network');
};

export default client;