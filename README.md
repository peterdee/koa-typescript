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

```shell script
npm start
```

### Database migrations

Check the [MIGRATIONS.md](MIGRATIONS.md) file for more information
