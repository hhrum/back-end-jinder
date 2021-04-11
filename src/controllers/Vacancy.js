// Модели пока что нет
const Vacancy = require("../models/Vacancy");

class VacancyControler {
  async index(req, res) {
    const resume = req.user.resume;

    res.send(await Vacancy.find().populate("company").populate("profession"));
  }

  show(req, res) {}

  store(req, res) {}

  update(req, res) {}

  destroy(req, res) {}
}

module.exports = new VacancyControler();
