import client from '../../mqtt';
import { getPublishTopicSet } from '../../helpers/topics';
import { TOGGLE_LIGHTBULB } from '../../helpers/messages';

export default class LedBulb {
  constructor(friendlyName) {
    this.name = friendlyName;
  }

  async toggle() {
    try {
      const topic = getPublishTopicSet(this.name);
      await client.publish(topic, TOGGLE_LIGHTBULB);
    } catch (error) {
      console.log('Unable to toggle the light', error);
    }
  }
};
