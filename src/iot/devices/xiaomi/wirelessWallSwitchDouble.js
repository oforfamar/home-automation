import { getSubscribeTopic } from '../../helpers/topics';

export default class WirelessWallSwitchDouble {
  connectedDevices = {};

  constructor({ deviceName, friendlyName, client }) {
    console.log(`Init WirelessWallSwitchDouble - ${friendlyName}`);

    this.name = deviceName;
    this.friendlyName = friendlyName;
    this.client = client;

    this.subscribeToMqtt();
  }

  async subscribeToMqtt() {
    const topic = getSubscribeTopic(this.name);

    try {
      console.log(
        `Subscribing to topic: ${topic} for WirelessWallSwitchDouble`
      );

      await this.client.subscribe(topic);

      this.initOnMessage();
    } catch (error) {
      console.log(`Failed to subscribe to mqtt topic: ${topic}`);
      console.log(error);
    }
  }

  add({ action, device }) {
    if (!(action in this.connectedDevices)) {
      this.connectedDevices[action] = [];
    }

    this.connectedDevices[action].push(device);
  }

  initOnMessage() {
    this.client.on('message', (topic, message) => {
      if (topic !== getSubscribeTopic(this.name)) {
        return;
      }

      const parsedMessage = JSON.parse(message.toString());
      console.log(
        `${this.friendlyName} received message: ${message.toString()}`
      );

      const { action } = parsedMessage;
      if (!(action in this.connectedDevices)) {
        return;
      }

      console.log(`Toggling devices for action ${action}`);

      for (let i = 0; i < this.connectedDevices[action].length; i++) {
        this.connectedDevices[action][i].toggle();
      }
    });
  }
}
