import WirelessWallSwitchDouble from './iot/devices/xiaomi/wirelessWallSwitchDouble';
import * as constants from './iot/helpers/constants';

const initWallSwitches = () => {
  const hallWallSwitch = new WirelessWallSwitchDouble('0x00158d00044ec153');

  hallWallSwitch.add({ action: constants.LEFT, device: '0x00158d0004111517' });
  hallWallSwitch.add({ action: constants.RIGHT, device: '0x00158d0004112f7b' });
}

export const init = () => {
  console.log({path: 'automationMediator'});
  initWallSwitches();
}
