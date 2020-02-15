"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class User extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: _sequelize2.default.STRING,
          primaryKey: true,
        },
        email: _sequelize2.default.STRING,
        score: _sequelize2.default.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

exports. default = User;
