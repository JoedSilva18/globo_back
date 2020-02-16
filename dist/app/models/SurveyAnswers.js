"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class SurvayAnswers extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: _sequelize2.default.STRING,
          primaryKey: true,
        },
        alternativea: _sequelize2.default.INTEGER,
        alternativeb: _sequelize2.default.INTEGER,
        alternativec: _sequelize2.default.INTEGER,
        alternatived: _sequelize2.default.INTEGER,
        total: _sequelize2.default.INTEGER,
      },
      {
        sequelize,
        tableName: 'survey_answers',
      }
    );

    return this;
  }
}

exports. default = SurvayAnswers;
