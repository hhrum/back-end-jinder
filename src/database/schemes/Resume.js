const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const common = require("../Helpers/CommonForVacanyAndResume");

const schema = {
  _id: Schema.Types.ObjectId,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true
  },
  education: {
    type: String,
    default: null
  },
  ...common
};

module.exports = new Schema(schema);
