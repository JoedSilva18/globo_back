module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('questions_answers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_question: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      question_answer_index: {
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
    return queryInterface.dropTable('questions_answers');
  },
};
