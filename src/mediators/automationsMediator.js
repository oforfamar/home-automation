import { initLivingRoom, initKitchenAndHall } from '../mediators/rooms';

let client;

const initDevices = () => {
  initLivingRoom(client);
  initKitchenAndHall(client);
};

export const init = (mqttClient) => {
  client = mqttClient;

  initDevices();
};
