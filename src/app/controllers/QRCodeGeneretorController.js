class QRCodeGeneratorController {
  async show(req, res) {
    const { id, type } = req.params;

    const uri = `https://globoapi.herokuapp.com/${type}/${id}`;

    return res.json({ qrcode: uri });
  }
}

export default new QRCodeGeneratorController();
