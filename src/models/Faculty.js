const mongoose = require("mongoose");
const Schema = require("../database/schemes/Faculty");

module.exports = mongoose.model("Faculty", Schema);
