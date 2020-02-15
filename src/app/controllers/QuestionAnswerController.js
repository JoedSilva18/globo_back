import QuestionAnswer from '../models/QuestionAnswer';

class QuestionAnswerController {
  async show(req, res) {
    const { idQuestion } = req.params;

    const { questionAnswerIndex } = await QuestionAnswer.findOne({
      where: {
        idQuestion,
      },
    });

    return res.json({ answer: questionAnswerIndex });
  }
}

export default new QuestionAnswerController();
