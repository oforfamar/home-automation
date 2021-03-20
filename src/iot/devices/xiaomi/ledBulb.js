import client from '../../mqtt';
import { TURN_ON, TURN_OFF } from '../../helpers/messages';

export default class LedBulb {
  constructor(friendlyName) {
    this.name = friendlyName;

    this.setTopic();
  }

  setTopic() {
    this.topic = `${process.env.TOPIC_NAME}/${this.name}/set`;
  }

  async turnOn() {
    try {
      await client.publish(this.topic, TURN_ON);
      console.log('Turned on the light');
    } catch (error) {
      console.log('Unable to turn on the light', error);
    }
  }

  async turnOff() {
    try {
      await client.publish(this.topic, TURN_OFF);
      console.log('Turned off the light');
    } catch (error) {
      console.log('Unable to turn off the light', error);
    }
  }
};