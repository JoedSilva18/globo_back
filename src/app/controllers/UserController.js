import User from '../models/User';

class UserController {
  async store(req, res) {
    const { id, name } = req.body;

    const user = await User.create({
      id,
      name,
      score: 0,
    });

    return res.json(user);
  }

  async index(req, res) {
    const users = await User.findAll({
      order: ['score', 'DESC'],
    });

    return res.json(users);
  }

  async show(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id);

    return res.json(user);
  }
}

export default new UserController();
