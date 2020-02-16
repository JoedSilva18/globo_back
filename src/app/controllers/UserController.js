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
    const users = await User.findAll();

    return res.json(users);
  }
}

export default new UserController();
