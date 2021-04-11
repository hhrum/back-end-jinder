const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const common = require("../Helpers/CommonForVacanyAndResume");

const schema = {
  _id: Schema.Types.ObjectId,
  // name: String,
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    default: null
  },
  isOpen: {
    type: Boolean,
    default: true
  },
  isHigh: {
    type: Boolean,
    default: true
  },
  ...common
};

module.exports = new Schema(schema);
