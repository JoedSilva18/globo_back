import SurveyAnswer from '../models/SurveyAnswers';

class SurveyAnswerController {
  async store(req, res) {
    const { idSurvey, index } = req.body;

    const survey = await SurveyAnswer.findByPk(idSurvey);

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

export default new SurveyAnswerController();
