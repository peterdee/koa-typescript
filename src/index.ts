import * as dotenv from 'dotenv';
dotenv.config();

import * as Koa from 'koa';
import * as Router from 'koa-router';

import * as bodyParser from 'koa-bodyparser';
import * as favicon from 'koa-favicon';
import * as json from 'koa-json';
import * as logger from 'koa-logger';

const app = new Koa();
const router = new Router();

router.get('/', (ctx: Koa.Context): void => {
  ctx.status = 200;
  ctx.body = {
    datetime: Date.now(),
    info: 'OK',
    status: ctx.status,
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
