import { exec } from 'child_process';
import { promisify } from 'util';

import { log } from '../services';

const execPromise = promisify(exec);

/**
 * Create the database if necessary
 * @param name {string} - database name
 * @returns {Promise<Error|void>}
 */
export default async (name: string = ''): Promise<Error|void> => {
  // find the database by the name
  const { stderr: checkError = '', stdout = '' } = await execPromise(`psql -l | grep ${name} | wc -l`);
  if (checkError) {
    throw new Error(checkError);
  }

  // create the database
  if (!stdout || stdout.trim() === '0') {
    const { stderr: createError = '' } = await execPromise(`createdb ${name}`);
    log('-- database: creating database');
    if (createError) {
      throw new Error(createError);
    }
  }
};
