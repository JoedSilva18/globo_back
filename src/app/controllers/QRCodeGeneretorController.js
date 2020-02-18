class QRCodeGeneratorController {
  show(req, res) {
    const { id, type } = req.params;

    if (type === 'quiz') {
      return res.json({ idQuiz: parseInt(id), idEnq: null, url: null });
    }

    if (type === 'enquete') {
      return res.json({ idQuiz: null, idEnq: parseInt(id), url: null });
    }

    if (type === 'url') {
      return res.json({ idQuiz: null, idEnq: null, url: parseInt(id) });
    }

    return res.json({ mensagem: 'error' });
  }
}

export default new QRCodeGeneratorController();
