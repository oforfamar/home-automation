import {
  STATE_L1,
  TURN_OFF_RELAY_L1,
  TURN_ON_RELAY_L1
} from '../../helpers/messages';
import {
  getPublishTopicGet,
  getPublishTopicSet,
  getSubscribeTopic
} from '../../helpers/topics';

export default class WirelessRelay {
  constructor({ deviceName, friendlyName, client }) {
    console.log('Init WirelessRelay');

    this.deviceName = deviceName;
    this.friendlyName = friendlyName;
    this.client = client;

    this.subscribeToMqtt();
  }

  async subscribeToMqtt() {
    const topic = getSubscribeTopic(this.deviceName);

    try {
      console.log(
        `Subscribing to topic: ${topic} for WirelessRelay ${this.friendlyName}`
      );

      await this.client.subscribe(topic);

      this.initOnMessage();
      await this.getDeviceStatus();
    } catch (error) {
      console.log(`Failed to subscribe to mqtt topic: ${topic}`);
      console.log(error);
    }
  }

  initOnMessage() {
    this.client.on('message', (topic, message) => {
      if (topic !== getSubscribeTopic(this.deviceName)) {
        return;
      }

      const parsedMessage = JSON.parse(message.toString());

      this.state_l1 = parsedMessage.state_l1;
      this.state_l2 = parsedMessage.state_l2;
    });
  }

  async getDeviceStatus() {
    try {
      const topic = getPublishTopicGet(this.deviceName);
      await this.client.publish(topic, STATE_L1);
    } catch (error) {
      console.log(`Unable to get ${this.friendlyName} device states`, error);
    }
  }

  toggle() {
    if (this.state_l1 === 'ON') {
      this.turnOff();
      return;
    }

    this.turnOn();
  }

  async turnOn() {
    try {
      const topic = getPublishTopicSet(this.deviceName);
      console.log(
        `Sending message ${TURN_ON_RELAY_L1} to ${this.friendlyName} using topic: ${topic}`
      );
      await this.client.publish(topic, TURN_ON_RELAY_L1);
    } catch (error) {
      console.log('Unable to turn on wireless relay L1', error);
    }
  }

  async turnOff() {
    try {
      const topic = getPublishTopicSet(this.deviceName);
      console.log(
        `Sending message ${TURN_OFF_RELAY_L1} to ${this.friendlyName} using topic: ${topic}`
      );
      await this.client.publish(topic, TURN_OFF_RELAY_L1);
    } catch (error) {
      console.log('Unable to turn on wireless relay L1', error);
    }
  }
}
