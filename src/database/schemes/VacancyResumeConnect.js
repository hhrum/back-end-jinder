const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = {
  _id: Schema.Types.ObjectId,
  vacancy: {
    type: Schema.Types.ObjectId,
    ref: "Vacancy"
  },
  vacancyState: String,
  resume: {
    type: Schema.Types.ObjectId,
    ref: "Resume"
  },
  resumeState: String
};

module.exports = new Schema(schema);
