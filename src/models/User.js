const mongoose = require("mongoose");
const Schema = require("../database/schemes/User");

module.exports = mongoose.model("User", Schema);
