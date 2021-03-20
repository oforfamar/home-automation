import mqtt from 'async-mqtt';

let client;

const printDevices = async () => {
  await client.publish(`${process.env.TOPIC_NAME}/bridge/devices`);
};

export const connect = async () => {
  client = await mqtt.connectAsync(process.env.MQTT_HOST);

  console.log(client);

  client.on('connect', () => {
    console.log('Connected to the Zigbee Network');
  
    await printDevices();
  });
};

export default client;