import { TOGGLE_POWERPLUG, TURN_ON_POWERPLUG, TURN_OFF_POWERPLUG } from "../../helpers/messages";
import { getPublishTopicSet } from "../../helpers/topics";

export default class PowerPlug {
  constructor(friendlyName, client) {
    console.log(`Init PowerPlug`);

    this.name = friendlyName;
    this.client = client;
  }

  async toggle() {
    try {
      const topic = getPublishTopicSet(this.name);
      console.log(`Sending message ${TOGGLE_POWERPLUG} to topic: ${topic}`);
      await this.client.publish(topic, TOGGLE_POWERPLUG);
    } catch (error) {
      console.log('Unable to toggle the power plug', error);
    }
  }

  async turnOn() {
    try {
      const topic = getPublishTopicSet(this.name);
      console.log(`Sending message ${TURN_ON_POWERPLUG} to topic: ${topic}`);
      await this.client.publish(topic, TURN_ON_POWERPLUG);
    } catch (error) {
      console.log('Unable to turn on the power plug', error);
    }
  }

  async turnOff() {
    try {
      const topic = getPublishTopicSet(this.name);
      console.log(`Sending message ${TURN_OFF_POWERPLUG} to topic: ${topic}`);
      await this.client.publish(topic, TURN_OFF_POWERPLUG);
    } catch (error) {
      console.log('Unable to turn off the power plug', error);
    }
  }
};