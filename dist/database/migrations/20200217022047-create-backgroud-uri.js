"use strict";module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('programs', 'background', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('programs', 'background');
  },
};
