"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _QuestionAnswer = require('../app/models/QuestionAnswer'); var _QuestionAnswer2 = _interopRequireDefault(_QuestionAnswer);
var _Program = require('../app/models/Program'); var _Program2 = _interopRequireDefault(_Program);
var _User = require('../app/models/User'); var _User2 = _interopRequireDefault(_User);

const models = [_QuestionAnswer2.default, _Program2.default, _User2.default];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new (0, _sequelize2.default)(_database2.default);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = _mongoose2.default.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

exports. default = new Database();
