import dotenv from 'dotenv';
import mqttClient from './iot/mqtt';
import LedBulb from './iot/devices/xiaomi/ledBulb';

dotenv.config({ path: `${__dirname}/../.env` });

const hallLight = new LedBulb(mqttClient);

