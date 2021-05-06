import { doorSensorTimeout } from '../../helpers/constants';
import { getSubscribeTopic } from '../../helpers/topics';

export default class ContactSensor {
  connectedDevices = [];
  timeout = null;

  constructor(friendlyName, client) {
    console.log(`Init ContactSensor`);

    this.name = friendlyName;
    this.client = client;

    this.subscribeToMqtt();
  }

  async subscribeToMqtt() {
    const topic = getSubscribeTopic(this.name);

    try {
      console.log(`Subscribing to topic: ${topic} for ContactSensor`);

      await this.client.subscribe(topic);

      this.initOnMessage();
    } catch (error) {
      console.log(`Failed to subscribe to mqtt topic: ${topic}`);
      console.log(error);
    }
  }

  add({ device }) {
    this.connectedDevices.push(device);
  }

  initOnMessage() {
    this.client.on('message', (topic, message) => {
      if (topic !== getSubscribeTopic(this.name)) {
        return;
      }

      const parsedMessage = JSON.parse(message.toString());
      const { contact } = parsedMessage;

      if (!contact) {
        this.executeSensorOpened();
        return;
      }

      this.executeSensorClosed();
    });
  }

  clearTimeout() {
    if (!this.timeout) {
      return;
    }

    clearTimeout(this.timeout);
    this.timeout = null;
  }

  executeSensorOpened() {
    console.log(`Sensor is open. Turning on devices`);
    this.clearTimeout();

    for (let i = 0; i < this.connectedDevices.length; i++) {
      this.connectedDevices[i].turnOn();
    }
  }

  executeSensorClosed() {
    console.log(`Sensor is closed. Starting timeout before turning off devices`);
    this.clearTimeout();

    this.timeout = setTimeout(() => {
      console.log(`Timeout reached. Turning off devices`);
      for (let i = 0; i < this.connectedDevices.length; i++) {
        this.connectedDevices[i].turnOff();
      }
    }, doorSensorTimeout);
  }
};
