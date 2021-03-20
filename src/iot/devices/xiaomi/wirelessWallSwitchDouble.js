import client from '../../mqtt';
import { getSubscribeTopic } from '../../helpers/topics';

export default class WirelessWallSwitchDouble {
  connectedDevices = {};

  constructor(friendlyName) {
    this.name = friendlyName;

    this.initOnMessage();
  }

  async subscribeToMqtt() {
    const topic = getSubscribeTopic(this.name);

    try {
      await client.subscribe(topic);
    } catch (error) {
      console.log(`Failed to subscribe to mqtt topic: ${topic}`);
      console.log(error);
    }
  }

  add({ action, device }) {
    this.connectedDevices[action].push(device);
  }

  initOnMessage() {
    console.log({path:'wirelessWallSwitchDouble', client});
    return;
    client.on('message', (topic, message) => {
      console.log({topic});
      if (topic !== getSubscribeTopic(this.name)) {
        return;
      }

      const { action } = JSON.parse(message.toString());

      if (!(action in this.connectedDevices)) {
        return;
      }

      for (let i = 0; i < this.connectedDevices[action].length; i++) {
        this.connectedDevices[action][i].toggle();
      }
    });
  }
};
