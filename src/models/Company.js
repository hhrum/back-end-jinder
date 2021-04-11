const mongoose = require("mongoose");
const Schema = require("../database/schemes/Company");

const User = require("./User");
const Vacancy = require("./Vacancy");

const model = mongoose.model("Company", Schema);

module.exports = model;

module.exports.addWorker = async (companyId, workerId) => {
  await User.findByIdAndUpdate(workerId, {
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

module.exports.addVacancy = async (companyId, vacancyId) => {
  await Vacancy.findByIdAndUpdate(
    vacancyId,
    {
      company: companyId
    },
    {
      new: true,
      useFindAndModify: false
    }
  );
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
