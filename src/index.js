import dotenv from 'dotenv';
import { connect } from './iot/mqtt';
import { init } from './automationsMediator';

dotenv.config({ path: `${__dirname}/../.env` });

(async () => {
  console.log({path: 'index.js'});
  await connect();

  init();
})();