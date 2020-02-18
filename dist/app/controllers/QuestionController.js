"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Question = require('../schemas/Question'); var _Question2 = _interopRequireDefault(_Question);
var _QuestionAnswer = require('../models/QuestionAnswer'); var _QuestionAnswer2 = _interopRequireDefault(_QuestionAnswer);

class QuestionController {
  async store(req, res) {
    const { formName, programId, date, questions, points } = req.body;

    const mongoQuestions = await _Question2.default.create({
      formName,
      programId,
      points,
      date,
      questions,
    });

    mongoQuestions.questions.forEach(async question => {
      const { _id, questionAnswerIndex } = question;
      await _QuestionAnswer2.default.create({
        idQuestion: _id,
        questionAnswerIndex,
      });
    });

    return res.status(200).json({ message: 'Pergunta criada com sucesso' });
  }

  async show(req, res) {
    const { id } = req.params;

    const question = await _Question2.default.find({
      _id: id,
    });

    const { questions } = question[0];

    const {
      _id,
      content,
      alternatives,
      points,
      questionAnswerIndex,
    } = questions[Math.floor(Math.random() * questions.length)];
    console.log(points);
    return res.json({
      _id,
      points,
      content,
      alternatives,
      questionAnswerIndex,
    });
  }

  async index(req, res) {
    const { id } = req.params;
    const question = await _Question2.default.find({
      programId: id,
    });
    return res.json(question);
  }
}

exports. default = new QuestionController();
