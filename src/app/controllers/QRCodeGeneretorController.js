class QRCodeGeneratorController {
  show(req, res) {
    const { id, type } = req.params;

    if (type === 'quiz') {
      return res.json({ idQuiz: parseInt(id), idSurvey: null, url: null });
    }

    if (type === 'enquete') {
      return res.json({ idQuiz: null, idSurvey: parseInt(id), url: null });
    }

    if (type === 'url') {
      return res.json({ idQuiz: null, idSurvey: null, url: parseInt(id) });
    }

    return res.json({ mensagem: 'error' });
  }
}

export default new QRCodeGeneratorController();
