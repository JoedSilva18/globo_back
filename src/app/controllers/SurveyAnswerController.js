import SurveyAnswer from '../models/SurveyAnswers';

class SurveyAnswerController {
  async store(req, res) {
    const { idSurvey, index } = req.body;

    const survey = await SurveyAnswer.findByPk(idSurvey);

    if (survey) {
      switch (index) {
        case 1: {
          const { yes } = survey;
          await survey.update({
            alternativea: yes + 1,
          });
          break;
        }
        case 2: {
          const { no } = survey;
          await survey.update({
            alternativeb: no + 1,
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

  async show(req, res) {
    const { id } = req.params;

    const survey = await SurveyAnswer.findByPk(id);

    return res.json(survey);
  }
}

export default new SurveyAnswerController();
