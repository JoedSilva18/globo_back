import QRView from '../models/QRView';

class QRViewController {
  async show(req, res) {
    const { id } = req.params;

    const qrcode = await QRView.findByPk(id);

    return res.json(qrcode);
  }
}

export default new QRViewController();
