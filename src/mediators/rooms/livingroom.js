import * as constants from '../../iot/helpers/constants';
import LightBulb from '../../iot/devices/xiaomi/lightBulb';
import WirelessWallSwitchDouble from '../../iot/devices/xiaomi/wirelessWallSwitchDouble';
import WirelessRelay from '../../iot/devices/xiaomi/wirelessRelay';

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

  const livingroomWallSwitch = new WirelessWallSwitchDouble({
    deviceName: '0x00158d0004849ce3',
    friendlyName: 'Livingroom switch',
    client
  });

  const deskLampRelay = new WirelessRelay({
    deviceName: '0x00158d00042866b7',
    friendlyName: 'Livingroom desk lamp',
    client
  });

  livingroomWallSwitch.add({
    action: constants.LEFT,
    device: livingroomLight1
  });
  livingroomWallSwitch.add({
    action: constants.LEFT,
    device: livingroomLight2
  });
  livingroomWallSwitch.add({
    action: constants.RIGHT,
    device: deskLampRelay
  });
};
