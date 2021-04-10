const mongoose = require("mongoose");
const Schema = require("../database/schemes/Profession");

module.exports = mongoose.model("Profession", Schema);
