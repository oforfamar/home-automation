import * as constants from '../../iot/helpers/constants';
import ContactSensor from '../../iot/devices/xiaomi/contactSensor';
import LightBulb from '../../iot/devices/xiaomi/lightBulb';
import PowerPlug from '../../iot/devices/xiaomi/powerPlug';
import WirelessWallSwitchDouble from '../../iot/devices/xiaomi/wirelessWallSwitchDouble';

export const initKitchenAndHall = (client) => {
  const hallLight = new LightBulb({
    deviceName: '0x00158d0004111517',
    friendlyName: 'Hall Light',
    client
  });
  const kitchenLight = new LightBulb({
    deviceName: '0x00158d0004112f7b',
    friendlyName: 'Kitchen Light',
    client
  });

  const kitchenPowerPlug = new PowerPlug('0x00158d00036c929a', client);

  const hallWallSwitch = new WirelessWallSwitchDouble(
    '0x00158d00044ec153',
    client
  );
  hallWallSwitch.add({ action: constants.LEFT, device: hallLight });
  hallWallSwitch.add({ action: constants.RIGHT, device: kitchenLight });
  hallWallSwitch.add({
    action: constants.RIGHT_DOUBLE,
    device: kitchenPowerPlug
  });

  const hallContactSensor = new ContactSensor('0x00158d0005447e5e', client);
  hallContactSensor.add({ device: hallLight });
};
