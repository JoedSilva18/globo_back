"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _QuestionAnswer = require('../models/QuestionAnswer'); var _QuestionAnswer2 = _interopRequireDefault(_QuestionAnswer);

class QuestionAnswerController {
  async show(req, res) {
    const { idQuestion } = req.params;

    const { questionAnswerIndex } = await _QuestionAnswer2.default.findOne({
      where: {
        idQuestion,
      },
    });

    return res.json({ answer: questionAnswerIndex });
  }
}

exports. default = new QuestionAnswerController();
