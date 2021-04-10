const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const common = require("../Helpers/CommonForVacanyAndResume");

const schema = {
  _id: Schema.Types.ObjectId,
  name: String,
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company"
  },
  ...common
};

module.exports = new Schema(schema);
