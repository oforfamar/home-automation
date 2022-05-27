import dotenv from 'dotenv';
import { connect } from './iot/mqtt';
import { init } from './mediators/automationsMediator';

dotenv.config({ path: `${__dirname}/.env` });

(async () => {
  console.log(`Starting the application`);
  const client = await connect();

  init(client);
})();