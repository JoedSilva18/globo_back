import Survey from '../schemas/Survey';
import SurveyAnswers from '../models/SurveyAnswers';

class SurveyController {
  async store(req, res) {
    const { _id } = await Survey.create(req.body);

    const id = _id.toHexString();

    const questionAnswers = await SurveyAnswers.create({
      id,
      alternativea: 0,
      alternativeb: 0,
      alternativec: 0,
      alternatived: 0,
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
      id: surveyId,
    });

    return res.json(survey);
  }
}

export default new SurveyController();
