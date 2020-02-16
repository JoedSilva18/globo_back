"use strict";Object.defineProperty(exports, "__esModule", {value: true});class QRCodeGeneratorController {
  async show(req, res) {
    const { id, type } = req.params;

    const uri = `https://globoapi.herokuapp.com/${type}/${id}`;

    return res.json({ qrcode: uri });
  }
}

exports. default = new QRCodeGeneratorController();
