const mongoose = require("mongoose");
const Schema = require("../database/schemes/Resume");

module.exports = mongoose.model("Resume", Schema);
