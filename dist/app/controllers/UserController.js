"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    const { id, name } = req.body;

    const user = await _User2.default.create({
      id,
      name,
      score: 0,
    });

    return res.json(user);
  }

  async index(req, res) {
    const users = await _User2.default.findAll();

    return res.json(users);
  }

  async show(req, res) {
    const { id } = req.params;
    const user = await _User2.default.findByPk(id);

    return res.json(user);
  }
}

exports. default = new UserController();
