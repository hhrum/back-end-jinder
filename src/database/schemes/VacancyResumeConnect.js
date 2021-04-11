const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = {
  _id: Schema.Types.ObjectId,
  vacancy: {
    type: Schema.Types.ObjectId,
    ref: "Vacancy"
  },
  vacancyState: {
    type: String,
    default: null
  },
  resume: {
    type: Schema.Types.ObjectId,
    ref: "Resume"
  },
  resumeState: {
    type: String,
    default: null
  }
};

module.exports = new Schema(schema);
