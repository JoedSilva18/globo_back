"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Survey = require('../schemas/Survey'); var _Survey2 = _interopRequireDefault(_Survey);
var _SurveyAnswers = require('../models/SurveyAnswers'); var _SurveyAnswers2 = _interopRequireDefault(_SurveyAnswers);

class SurveyController {
  async store(req, res) {
    const { _id } = await _Survey2.default.create(req.body);

    const id = _id.toHexString();

    const questionAnswers = await _SurveyAnswers2.default.create({
      id,
      alternativea: 0,
      alternativeb: 0,
      alternativec: 0,
      alternatived: 0,
      total: 0,
    });

    return res.json(questionAnswers);
  }
}

exports. default = new SurveyController();
