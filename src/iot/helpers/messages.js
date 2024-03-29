export const STATE = JSON.stringify({ state: '' });
export const STATE_L1 = JSON.stringify({ state_l1: '' });
export const STATE_L2 = JSON.stringify({ state_l2: '' });
export const TURN_ON_RELAY_L1 = JSON.stringify({ state_l1: 'ON' });
export const TURN_OFF_RELAY_L1 = JSON.stringify({ state_l1: 'OFF' });
export const TURN_ON_RELAY_L2 = JSON.stringify({ state_l2: 'ON' });
export const TURN_OFF_RELAY_L2 = JSON.stringify({ state_l2: 'OFF' });
export const TURN_ON_LIGHTBULB = JSON.stringify({
  state: 'ON',
  transition: 0,
  brightness: '255'
});
export const TURN_OFF_LIGHTBULB = JSON.stringify({
  state: 'OFF',
  transition: 0
});
export const TOGGLE_LIGHTBULB = JSON.stringify({
  state: 'toggle',
  transition: 0
});
export const TOGGLE_BRIGHTNESS = JSON.stringify({
  brightness: '##',
  transition: 0
});

export const TURN_ON_POWERPLUG = JSON.stringify({ state: 'ON' });
export const TURN_OFF_POWERPLUG = JSON.stringify({ state: 'OFF' });
export const TOGGLE_POWERPLUG = JSON.stringify({ state: 'toggle' });
