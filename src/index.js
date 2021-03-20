import dotenv from 'dotenv';
import mqttClient from './iot/mqtt';
import LedBulb from './iot/devices/xiaomi/ledBulb';

dotenv.config({ path: `${__dirname}/../.env` });

(async () => {
  const hallLight = new LedBulb('0x00158d0004111517');

  hallLight.logClient();

  await hallLight.turnOn();

  setTimeout(() => {
    hallLight.turnOff();
  }, 2000);
})();