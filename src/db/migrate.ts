import { exec } from 'child_process';
import { promises as fs } from 'fs';
import { promisify } from 'util';

import { log } from '../services';

const execPromise = promisify(exec);

// migrations directory path
const directory = `${process.cwd()}/migrations`;

/**
 * Run migrations if necessary
 * @param migrate {boolean} - if migrations are enabled
 * @returns {Promise<Error|void>}
 */
export default async (migrate: boolean = false): Promise<Error|void> => {
  try {
    if (!migrate) {
      return log('-- database: migrations are disabled');
    }

    // check the migrations directory, create it if necessary
    try {
      await fs.access(directory);
    } catch (error) {
      if (error.code && error.code === 'ENOENT') {
        await fs.mkdir(directory);
      } else {
        throw new Error(error);
      }
    }

    // run migrations
    const { stdout = '', stderr = '' } = await execPromise('sequelize db:migrate');
    if (stderr) {
      throw new Error(stderr);
    }
    log(stdout);

    return log('-- database: migrations are done');
  } catch (error) {
    throw new Error(error);
  }
};
