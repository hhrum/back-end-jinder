const mongoose = require("mongoose");
const Schema = require("../database/schemes/VacancyResumeConnect");

module.exports = mongoose.model("VacancyResumeConnect", Schema);
