## Database migrations

Requires [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)

```shell script
npm i -g sequelize-cli
```

### `.sequelizerc` config

Sequelize configuration for migrations is located in the [.sequelizerc](.sequelizerc) file

It is required and should be adjusted if necessary

### `migrations.json` config

Database connection config file should be located in the project root directory and should be named `migrations.json`

This file is in the [`.gitignore`](.gitignore)

Check the [migrations.json.example](migrations.json.example) file for the reference

### Migration files

Migration files are located in the `migrations` directory

### Create migration

To create a new migration, run:

```shell script
sequelize migration:create --name <MIGRATION_NAME>
```

This command will create a new file in the `migrations` directory

You need to edit this file manually

More information on the migration files:

[Create a migration with Sequelize-CLI (Youtube)](https://www.youtube.com/watch?v=qwAEYnfC3K8)

[QueryInterface documentation](http://docs.sequelizejs.com/class/lib/query-interface.js~QueryInterface.html)

Migration file example:

```javascript
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Admins', 'name', {
      type: Sequelize.STRING,
      defaultValue: null,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Admins', 'name');
  },
};
```

### Execute migrations

Migrations will be executed from the current state of the database, i. e. all of the applied migrations will be skipped, and only the new changes are going to be applied.

Run migrations:

```shell script
sequelize db:migrate
```

### Undo migrations

Migrations are going to be undone one by one, from the current state of the database

Undo migrations:

```shell script
sequelize db:migrate:undo
```
