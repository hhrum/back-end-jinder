const mongoose = require("mongoose");
const Schema = require("../database/schemes/Educationlnstitution");

const Faculty = require("../models/Faculty");

const model = mongoose.model("Educationlnstitution", Schema);

module.exports = model;

module.exports.addFaculty = (institutionId, facultyId) => {
  Faculty.findByIdAndUpdate(facultyId, {
    institution: institutionId
  });
  return model.findByIdAndUpdate(
    institutionId,
    {
      $push: { faculties: facultyId }
    },
    {
      new: true,
      useFindAndModify: false
    }
  );
};
