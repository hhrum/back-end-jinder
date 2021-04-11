// Модели пока что нет
const Vacancy = require("../models/Vacancy");
const Connect = require("../models/VacancyResumeConnect");

class VacancyControler {
  async index(req, res) {
    const resume = req.user.resume;

    let vacancies = await Vacancy.find({ profession: resume.profession })
      .populate("company")
      .populate("profession");

    let exVacs = await Connect.find({
      resume: resume._id,
      resumeState: { $ne: null }
    });

    vacancies = vacancies.filter((vac) => {
      const test = !!exVacs.find((el) => {
        console.log(el.vacancy, vac._id, el.vacancy === vac._id);

        return el.vacancy === vac._id;
      });
      console.log(test);

      return !!test;
    });

    res.send(vacancies);
  }

  show(req, res) {}

  store(req, res) {}

  update(req, res) {}

  destroy(req, res) {}
}

module.exports = new VacancyControler();
