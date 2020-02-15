"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class QuestionAnswer extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        idQuestion: _sequelize2.default.INTEGER,
        questionAnswerIndex: _sequelize2.default.INTEGER,
      },
      {
        sequelize,
        tableName: 'questions_answers',
      }
    );

    return this;
  }
}

exports. default = QuestionAnswer;
