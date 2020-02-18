import Sequelize, { Model } from 'sequelize';

class QRView extends Model {
  static init(sequelize) {
    super.init(
      {
        uri: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'qrviews',
      }
    );

    return this;
  }
}

export default QRView;
