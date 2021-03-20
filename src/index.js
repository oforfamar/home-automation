import dotenv from 'dotenv';
import { connect } from './iot/mqtt';
import LedBulb from './iot/devices/xiaomi/ledBulb';

dotenv.config({ path: `${__dirname}/../.env` });

(async () => {
  await connect();

  const hallLight = new LedBulb('0x00158d0004111517');

  await hallLight.turnOn();

  setTimeout(() => {
    hallLight.turnOff();
  }, 4000);
})();