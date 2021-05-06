import mqtt from 'async-mqtt';

export const connect = async () => {
  console.log(`Connecting to MQTT on host: ${process.env.MQTT_HOST}`);
  return mqtt.connectAsync(process.env.MQTT_HOST);
};
