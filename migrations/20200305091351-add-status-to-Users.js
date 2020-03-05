'use strict';

module.exports = {
  down: (queryInterface) => queryInterface.removeColumn('Users', 'status'),
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'status', {
      defaultValue: 'active',
      type: Sequelize.STRING,
    });
  },
};
