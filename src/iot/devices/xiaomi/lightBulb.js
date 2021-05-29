import { getPublishTopicSet, getSubscribeTopic } from '../../helpers/topics';
import {
  TOGGLE_LIGHTBULB,
  TOGGLE_BRIGHTNESS,
  TURN_ON_LIGHTBULB,
  TURN_OFF_LIGHTBULB
} from '../../helpers/messages';

export default class LightBulb {
  constructor({ deviceName, friendlyName, client }) {
    console.log(`Init LightBulb`);

    this.deviceName = deviceName;
    this.friendlyName = friendlyName;
    this.client = client;

    this.subscribeToMqtt();
  }

  async subscribeToMqtt() {
    const topic = getSubscribeTopic(this.deviceName);

    try {
      console.log(
        `Subscribing to topic: ${topic} for LightBulb ${this.friendlyName}`
      );

      await this.client.subscribe(topic);
    } catch (error) {
      console.log(`Failed to subscribe to mqtt topic: ${topic}`);
      console.log(error);
    }
  }

  async toggle() {
    try {
      const topic = getPublishTopicSet(this.deviceName);
      console.log(
        `Sending message ${TOGGLE_LIGHTBULB} to ${this.friendlyName} using topic ${topic}`
      );
      await this.client.publish(topic, TOGGLE_LIGHTBULB);
    } catch (error) {
      console.log('Unable to toggle the light', error);
    }
  }

  async turnOn() {
    try {
      const topic = getPublishTopicSet(this.deviceName);
      console.log(
        `Sending message ${TURN_ON_LIGHTBULB} to ${this.friendlyName} using topic: ${topic}`
      );
      await this.client.publish(topic, TURN_ON_LIGHTBULB);
    } catch (error) {
      console.log('Unable to turn on the light', error);
    }
  }

  async turnOff() {
    try {
      const topic = getPublishTopicSet(this.deviceName);
      console.log(
        `Sending message ${TURN_OFF_LIGHTBULB} to ${this.friendlyName} using topic: ${topic}`
      );
      await this.client.publish(topic, TURN_OFF_LIGHTBULB);
    } catch (error) {
      console.log('Unable to turn off the light', error);
    }
  }

  async setBrightness(brightness = 255) {
    try {
      const topic = getPublishTopicSet(this.deviceName);

      await this.client.publish(
        topic,
        TOGGLE_BRIGHTNESS.replace('##', brightness)
      );
    } catch (error) {
      console.log('Unable to set brightness', error);
    }
  }
}
