import Sequelize, { Model } from 'sequelize';

class Program extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        schedule: Sequelize.STRING,
        uri: Sequelize.STRING,
        background: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Program;
