import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        name: Sequelize.STRING,
        gender: Sequelize.STRING,
        birth: Sequelize.DATE,
        score: Sequelize.INTEGER,
        programs: Sequelize.ARRAY(Sequelize.RANGE(Sequelize.INTEGER)),
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default User;
