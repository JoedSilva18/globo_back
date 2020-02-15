import Question from '../schemas/Question';

class FormController {
  async show(req, res) {
    const { formName } = req.body;

    const question = await Question.find({
      formName,
    });

    return res.json(question);
  }
}

export default new FormController();
