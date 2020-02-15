import User from '../models/User';

class ScoreController {
  async update(req, res) {
    const { id } = req.params;
    const { points } = req.body;

    const user = await User.findByPk(id);
    const { score } = user;

    const userUpdated = await user.update({
      score: score + points,
    });

    return res.json(userUpdated);
  }
}

export default new ScoreController();
