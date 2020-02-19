import Survey from '../schemas/Survey';
import SurveyAnswers from '../models/SurveyAnswers';

class SurveyController {
  async store(req, res) {
    const { _id } = await Survey.create(req.body);

    const id = _id.toHexString();

    const questionAnswers = await SurveyAnswers.create({
      id,
      yes: 0,
      no: 0,
      total: 0,
    });

    return res.json(questionAnswers);
  }

  async index(req, res) {
    const { programId } = req.params;

    const surveys = await Survey.find({
      programId,
    });

    return res.json(surveys);
  }

  async show(req, res) {
    const { surveyId } = req.params;

    const survey = await Survey.find({
      _id: surveyId,
    });

    return res.json(survey[0]);
  }
}

export default new SurveyController();
