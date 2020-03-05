## A Koa application with Typescript

This application is used for the Jenkins auto-deployment testing

Stack: [Koa](https://koajs.com/), [Node](https://nodejs.org/en/), [Sequelize](https://sequelize.org/), [Typescript](https://www.typescriptlang.org/)

### Environemt

The `.env` file is required

Check the [`.env.example`](.env.example) file for the list of the required environmental variables

### Deploy

Install and configure the [PostgreSQL](https://www.postgresql.org/download/) database

Deploy the project:

```shell script
git clone https://github.com/peterdee/koa-typescript
cd ./koa-typescript
nvm use 12.16.1
npm i -g sequelize-cli
npm i
```

### Launch

For the local deployment, run:

```shell script
npm start
```

For the staging, install the [PM2](https://www.npmjs.com/package/pm2) module:

```shell script
npm i -g pm2
pm2 install pm2-logrotate
```

Start the server with PM2:

```shell script
pm2 start npm --no-automation --name koa-typescript -- run start
pm2 save
```

To restart the server, run:

```shell script
pm2 restart koa-typescript
```

To stop the server, run:

```shell script
pm2 delete koa-typescript
```

### Database migrations

Check the [MIGRATIONS.md](MIGRATIONS.md) file for more information
