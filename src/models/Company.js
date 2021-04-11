const mongoose = require("mongoose");
const Schema = require("../database/schemes/Company");

const User = require("./User");
const Vacancy = require("./Vacancy");

const model = mongoose.model("Company", Schema);

module.exports = model;

module.exports.addWorker = (companyId, workerId) => {
  User.findByIdAndUpdate(workerId, {
    company: companyId
  });
  return model.findByIdAndUpdate(
    companyId,
    {
      $push: { workers: workerId }
    },
    {
      new: true,
      useFindAndModify: false
    }
  );
};

module.exports.addVacancy = (companyId, vacancyId) => {
  Vacancy.findByIdAndUpdate(vacancyId, {
    company: companyId
  });
  console.log(companyId, vacancyId);

  return model.findByIdAndUpdate(
    companyId,
    {
      $push: { vacancies: vacancyId }
    },
    {
      new: true,
      useFindAndModify: false
    }
  );
};
