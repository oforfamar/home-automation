import * as constants from '../../iot/helpers/constants';
import LightBulb from '../../iot/devices/xiaomi/lightBulb';
import WirelessWallSwitchDouble from '../../iot/devices/xiaomi/wirelessWallSwitchDouble';

export const initLivingRoom = (client) => {
  const livingroomLight1 = new LightBulb({
    deviceName: '0x00158d000431336b',
    friendlyName: 'Livingroom light - balcony',
    client
  });

  const livingroomLight2 = new LightBulb({
    deviceName: '0x00158d000403ca86',
    friendlyName: 'Livingroom light - desk',
    client
  });

  const livingroomWallSwitch = new WirelessWallSwitchDouble(
    '0x00158d0004849ce3',
    client
  );

  livingroomWallSwitch.add({
    action: constants.LEFT,
    device: livingroomLight1
  });
  livingroomWallSwitch.add({
    action: constants.LEFT,
    device: livingroomLight2
  });
};
