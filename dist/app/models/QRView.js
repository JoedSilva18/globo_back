"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class QRView extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        uri: _sequelize2.default.STRING,
      },
      {
        sequelize,
        tableName: 'qrviews',
      }
    );

    return this;
  }
}

exports. default = QRView;
