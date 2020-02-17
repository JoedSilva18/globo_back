"use strict";module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('survey_answers', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      yes: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      no: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('survey_answers');
  },
};
