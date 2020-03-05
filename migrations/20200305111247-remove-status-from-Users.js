'use strict';

module.exports = {
  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'status', {
      defaultValue: 'active',
      type: Sequelize.STRING,
    });
  },
  up: (queryInterface) => queryInterface.removeColumn('Users', 'status'),
};
