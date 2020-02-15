"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class ScoreController {
  async update(req, res) {
    const { id } = req.params;
    const { points } = req.body;

    const user = await _User2.default.findByPk(id);
    const { score } = user;

    const userUpdated = await user.update({
      score: score + points,
    });

    return res.json(userUpdated);
  }
}

exports. default = new ScoreController();
