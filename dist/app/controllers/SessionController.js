"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class SessionController {
  async store(req, res) {
    {
      const { id } = req.body;

      const user = await _User2.default.findByPk(id);

      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      const { name } = user;

      return res.json({
        user: {
          id,
          name,
        },
        token: _jsonwebtoken2.default.sign({ id }, _auth2.default.secret, {
          expiresIn: _auth2.default.expiresIn,
        }),
      });
    }
  }
}

exports. default = new SessionController();
