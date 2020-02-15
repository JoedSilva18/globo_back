import Question from '../schemas/Question';

class QRCodeGeneratorController {
  async show(req, res) {
    const { id } = req.params;

    const uri = `http://localhost:3333/getQRCode/${id}`;

    return res.json({ qrcode: uri });
  }
}

export default new QRCodeGeneratorController();
