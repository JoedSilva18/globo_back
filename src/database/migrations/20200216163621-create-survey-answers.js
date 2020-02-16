module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('survey_answers', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      alternativea: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      alternativeb: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      alternativec: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      alternatived: {
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
