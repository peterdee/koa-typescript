const { env = {} } = process;

// database connection options
export const DATABASE = {
  database: env.DATABASE_NAME,
  host: env.DATABASE_HOSTNAME,
  logging: env.DATABASE_LOGGING === 'true',
  password: env.DATABASE_PASSWORD,
  port: Number(env.DATABASE_PORT),
  seeding: env.DATABASE_SEEDING === 'true',
  username: env.DATABASE_USERNAME,
};

// default user data
export const USER_DATA = {
  email: env.USER_DATA_EMAIL,
  firstName: env.USER_DATA_FIRST_NAME,
  lastName: env.USER_DATA_LAST_NAME,
  password: env.USER_DATA_PASSWORD,
};
