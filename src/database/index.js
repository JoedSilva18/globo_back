import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import databaseConfig from '../config/database';
import QuestionAnswer from '../app/models/QuestionAnswer';
import Program from '../app/models/Program';
import User from '../app/models/User';
import SurvayAnswers from '../app/models/SurveyAnswers';
import QRView from '../app/models/QRView';

const models = [QuestionAnswer, Program, User, SurvayAnswers, QRView];

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
    this.mongoConnection = mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
