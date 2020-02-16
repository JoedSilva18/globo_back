"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _SurveyAnswers = require('../models/SurveyAnswers'); var _SurveyAnswers2 = _interopRequireDefault(_SurveyAnswers);

class SurveyAnswerController {
  async store(req, res) {
    const { idSurvey, index } = req.body;

    const survey = await _SurveyAnswers2.default.findByPk(idSurvey);

    if (survey) {
      switch (index) {
        case 1: {
          const { alternativea } = survey;
          await survey.update({
            alternativea: alternativea + 1,
          });
          break;
        }
        case 2: {
          const { alternativeb } = survey;
          await survey.update({
            alternativeb: alternativeb + 1,
          });
          break;
        }
        case 3: {
          const { alternativec } = survey;
          await survey.update({
            alternativec: alternativec + 1,
          });
          break;
        }
        case 4: {
          const { alternatived } = survey;
          await survey.update({
            alternatived: alternatived + 1,
          });
          break;
        }
        default:
      }
    }
    const { total } = survey;
    const surveyUpdated = await survey.update({
      total: total + 1,
    });

    return res.json(surveyUpdated);
  }
}

exports. default = new SurveyAnswerController();
