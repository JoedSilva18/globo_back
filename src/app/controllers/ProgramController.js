import Program from '../models/Program';

class ProgramController {
  async store(req, res) {
    const program = await Program.create(req.body);
    return res.json(program);
  }

  async index(req, res) {
    const programs = await Program.findAll();
    return res.json(programs);
  }

  async show(req, res) {
    const { id } = req.params;

    const program = await Program.findByPk(id);

    return res.json(program);
  }
}

export default new ProgramController();
