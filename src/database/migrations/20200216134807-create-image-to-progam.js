module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('programs', 'uri', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('programs', 'uri');
  },
};
