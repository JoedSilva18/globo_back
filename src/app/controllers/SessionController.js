import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    {
      const { id } = req.body;

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      const { name } = user;

      return res.json({
        user: {
          id,
          name,
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    }
  }
}

export default new SessionController();
