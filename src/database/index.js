import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import databaseConfig from '../config/database';
import QuestionAnswer from '../app/models/QuestionAnswer';
import Quiz from '../app/models/Quiz';

const models = [QuestionAnswer, Quiz];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect('mongodb://localhost:27017/globo', {
      useNewUrlParser: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
