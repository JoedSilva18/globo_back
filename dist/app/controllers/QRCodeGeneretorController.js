"use strict";Object.defineProperty(exports, "__esModule", {value: true});class QRCodeGeneratorController {
  async show(req, res) {
    const { id } = req.params;

    const uri = `http://localhost:3333/getQRCode/${id}`;

    return res.json({ qrcode: uri });
  }
}

exports. default = new QRCodeGeneratorController();
