import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: Sequelize.STRING,
        email: Sequelize.STRING,
        score: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default User;
