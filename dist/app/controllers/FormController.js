"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Question = require('../schemas/Question'); var _Question2 = _interopRequireDefault(_Question);

class FormController {
  async show(req, res) {
    const { formName } = req.body;

    const question = await _Question2.default.find({
      formName,
    });

    return res.json(question);
  }
}

exports. default = new FormController();
