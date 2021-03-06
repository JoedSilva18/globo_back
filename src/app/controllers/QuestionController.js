import Question from '../schemas/Question';
import QuestionAnswer from '../models/QuestionAnswer';

class QuestionController {
  async store(req, res) {
    const { formName, programId, date, questions, points } = req.body;

    const mongoQuestions = await Question.create({
      formName,
      programId,
      points,
      date,
      questions,
    });

    mongoQuestions.questions.forEach(async question => {
      const { _id, questionAnswerIndex } = question;
      await QuestionAnswer.create({
        idQuestion: _id,
        questionAnswerIndex,
      });
    });

    return res.status(200).json({ message: 'Pergunta criada com sucesso' });
  }

  async show(req, res) {
    const { id } = req.params;

    const question = await Question.find({
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
    const question = await Question.find({
      programId: id,
    });
    return res.json(question);
  }
}

export default new QuestionController();
