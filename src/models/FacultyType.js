const mongoose = require("mongoose");
const Schema = require("../database/schemes/FacultyType");

module.exports = mongoose.model("FacultyType", Schema);
