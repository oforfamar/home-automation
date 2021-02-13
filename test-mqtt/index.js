const mqtt = require('mqtt');
const constants = require('./constants');

const wirelessWallSwitchTopic = 'zigbee2mqtt/0x00158d00044ec153';
const lightbulbHallTopic = 'zigbee2mqtt/0x00158d0004111517';
const lightbulbKitchenTopic = 'zigbee2mqtt/0x00158d0004112f7b';

const client = mqtt.connect('mqtt://localhost');

let hallLightIsOn = false;
let kitchenLightIsOn = false;


client.on('connect', () => {
  console.log('Client connected');

  client.subscribe(wirelessWallSwitchTopic, (err) => {
    if(err) {
      console.log('Failed to subscribe to topic', err);
      return;
    }
    console.log('Subscribed to topic');
    console.log({ hallLightIsOn, kitchenLightIsOn });
  });
});


const leftButtonClickAction = () => {
  const state = hallLightIsOn ? 'off' : 'on';
  client.publish(`${lightbulbHallTopic}/set`, JSON.stringify({ state }));
  hallLightIsOn = !hallLightIsOn;
  console.log({ state, hallLightIsOn });
};

const rightButtonClickAction = () => {
  const state = kitchenLightIsOn ? 'off' : 'on';
  client.publish(`${lightbulbKitchenTopic}/set`, JSON.stringify({ state }));
  kitchenLightIsOn = !kitchenLightIsOn;
  console.log({ state, kitchenLightIsOn });
};


client.on('message', (topic, message) => {
  switch(topic) {
    case wirelessWallSwitchTopic:
      const { action } = JSON.parse(message.toString());
      if (action === 'left') {
        leftButtonClickAction();
      } else if (action === 'right') {
        rightButtonClickAction();
      }
    break;
  }
});


