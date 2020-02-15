import Sequelize, { Model } from 'sequelize';

class QuestionAnswer extends Model {
  static init(sequelize) {
    super.init(
      {
        idQuestion: Sequelize.INTEGER,
        questionAnswerIndex: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'questions_answers',
      }
    );

    return this;
  }
}

export default QuestionAnswer;
