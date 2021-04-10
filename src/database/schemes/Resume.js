const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const common = require("../Helpers/CommonForVacanyAndResume");

const schema = {
  _id: Schema.Types.ObjectId,
  education: String,
  description: String,
  ...common
};

module.exports = new Schema(schema);
