const mongoose = require("mongoose");
const Schema = require("../database/schemes/Company");

module.exports = mongoose.model("Company", Schema);
