import { basename as pathBase, join } from 'path';
import { readdirSync } from 'fs';
import  { Sequelize } from 'sequelize';

import { DATABASE } from '../config';

const {
  database,
  host,
  logging,
  password,
  port,
  username,
} = DATABASE;

const basename = pathBase(__filename);
const db: any = {};

// create the connection
const connection = new Sequelize(
  database,
  username,
  password,
  {
    dialect: 'postgres',
    host,
    logging,
    pool: {
      idle: 30000,
      max: 100,
    },
    port,
  },
);

// invoke database models
readdirSync(`${__dirname}/models`)
  .filter(
    (file: string): boolean => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'),
  )
  .forEach((file: string): void => {
    const model = connection.import(join(`${__dirname}/models`, file));
    db[model.name] = model;
  });

// create associations
Object.keys(db).forEach(
  (modelName: string): void => db[modelName].associate && db[modelName].associate(db),
);

db.sequelize = connection;
db.database = connection;
db.Sequelize = Sequelize;

export default db;
