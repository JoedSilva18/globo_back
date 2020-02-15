"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    const user = await _User2.default.create(req.body);

    return res.json(user);
  }

  async index(req, res) {
    const users = await _User2.default.findAll();

    return res.json(users);
  }
}

exports. default = new UserController();
