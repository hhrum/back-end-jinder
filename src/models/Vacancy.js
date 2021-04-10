const mongoose = require("mongoose");
const Schema = require("../database/schemes/Vacancy");

module.exports = mongoose.model("Vacancy", Schema);
