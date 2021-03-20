import mqtt from 'async-mqtt';

let client;

const printDevices = () => {
  client.publish(`${process.env.TOPIC_NAME}/bridge/devices`);
};

export const connect = async () => {
  client = await mqtt.connectAsync(process.env.MQTT_HOST);

  console.log(client);

  client.on('connect', () => {
    console.log('Connected to the Zigbee Network');
  
    printDevices();
  });
};

export default client;