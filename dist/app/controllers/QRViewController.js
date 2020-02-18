"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _QRView = require('../models/QRView'); var _QRView2 = _interopRequireDefault(_QRView);

class QRViewController {
  async show(req, res) {
    const { id } = req.params;

    const qrcode = await _QRView2.default.findByPk(id);

    return res.json(qrcode);
  }
}

exports. default = new QRViewController();
