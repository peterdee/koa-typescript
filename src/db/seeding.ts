import * as bcrypt from 'bcrypt';

import db from './index';
import { log } from '../services';
import { USER_DATA } from '../config';

/**
 * Do the seeding if necessary
 * @param seeding {boolean} - if seeding is enabled (true / false)
 * @returns {Promise<Error|void>}
 */
export default async (seeding: boolean = false): Promise<Error|void> => {
  try {
    if (!seeding) {
      return log('-- database: seeding is disabled');
    }

    // check if seeding was already done
    const User = await db.Users.findOne({
      where: {
        email: USER_DATA.email,
        isDeleted: false,
      },
    });
    if (User) {
      return log('-- database: seeding is not required');
    }

    // do the seeding
    const seconds = Math.floor(Date.now() / 1000);
    const [hash, newUser] = await Promise.all([
      bcrypt.hash(USER_DATA.password, 10),
      db.Users.create({
        email: USER_DATA.email,
        firstName: USER_DATA.firstName,
        lastName: USER_DATA.lastName,
        created: seconds,
        updated: seconds,
      }),
    ]);
    await db.Passwords.create({
      userId: newUser.id,
      hash,
      created: seconds,
      updated: seconds,
    });

    return log('-- database: seeding is done');
  } catch (error) {
    throw new Error(error);
  }
};
