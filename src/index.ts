import * as dotenv from 'dotenv';
dotenv.config();

import * as Koa from 'koa';
import * as Router from 'koa-router';

import * as bodyParser from 'koa-bodyparser';
import * as favicon from 'koa-favicon';
import * as json from 'koa-json';
import * as logger from 'koa-logger';

import { calculateDeploymentDate, calculateUptime } from './services';
import db from './db';

const app = new Koa();
const router = new Router();

/**
 * Index route
 */
router.get('/', (ctx: Koa.Context): void => {
  ctx.status = 200;
  ctx.body = {
    datetime: Date.now(),
    deployed: calculateDeploymentDate(),
    info: 'OK',
    status: ctx.status,
    uptime: calculateUptime(),
  };
  return ctx.body;
});

/**
 * Load user data
 */
router.get('/user', async (ctx: Koa.Context): Promise<void> => {
  const User = await db.Users.findOne({ where: { isDeleted: false } });
  ctx.status = 200;
  ctx.body = {
    data: {
      email: User.email,
      firstName: User.firstName,
      lastName: User.lastName,
      status: User.status || 'active',
    },
    datetime: Date.now(),
    deployed: calculateDeploymentDate(),
    info: 'OK',
    status: ctx.status,
    uptime: calculateUptime(),
  };
  return ctx.body;
});

app.use(bodyParser());
app.use(favicon(`${process.cwd()}/assets/favicon.ico`));
app.use(json());
app.use(logger());

// enable routing
app.use(router.routes());

// launch the server
const PORT = Number(process.env.PORT) || 2020;
/* tslint:disable-next-line:no-console */
app.listen(PORT, () => console.log(`-- Server is running on port ${PORT}`));
