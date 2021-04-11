// Модели пока что нет
const Profession = require("../models/Profession");

class ProfessionControler {
  async index(req, res) {
    res.send(await Profession.find());
  }

  show(req, res) {}

  store(req, res) {}

  update(req, res) {}

  destroy(req, res) {}
}

module.exports = new ProfessionControler();
