"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Program = require('../models/Program'); var _Program2 = _interopRequireDefault(_Program);

class ProgramController {
  async store(req, res) {
    const program = await _Program2.default.create(req.body);
    return res.json(program);
  }

  async index(req, res) {
    const programs = await _Program2.default.findAll();
    return res.json(programs);
  }

  async show(req, res) {
    const { ids } = req.body;

    const programs = await _Program2.default.findAll({
      where: {
        id: ids,
      },
    });

    return res.json(programs);
  }
}

exports. default = new ProgramController();
