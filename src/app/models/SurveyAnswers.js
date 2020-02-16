import Sequelize, { Model } from 'sequelize';

class SurvayAnswers extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        alternativea: Sequelize.INTEGER,
        alternativeb: Sequelize.INTEGER,
        alternativec: Sequelize.INTEGER,
        alternatived: Sequelize.INTEGER,
        total: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'survey_answers',
      }
    );

    return this;
  }
}

export default SurvayAnswers;
