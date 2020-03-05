import createDatabase from './create-database';
import { DATABASE } from '../config';
import db from './index';
import { log } from '../services';
import seeding from './seeding';

/**
 * Run database synchronization
 * @returns {Promise<Error|void>}
 */
(async function sync(): Promise<Error|void> {
  try {
    // create database if necessary
    await createDatabase(DATABASE.database);

    // sync the database if necessary
    try {
      await db.Users.findAll();
    } catch (error) {
      const { message = '', name = '' } = error;
      if (message && message === 'relation "Users" does not exist'
        && name && name === 'SequelizeDatabaseError') {
        await db.database.sync({ force: true });
        log('-- database: syncing is done');
      } else {
        throw new Error(error);
      }
    }

    // do the seeding
    await seeding(DATABASE.seeding);

    log('-- database: ready');
    return process.exit(0);
  } catch (error) {
    throw new Error(error);
  }
}());
