const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = {
  _id: Schema.Types.ObjectId,
  name: String,
  institution: {
    type: Schema.Types.ObjectId,
    ref: "EducationInstitution",
    require: true
  },
  faculty_type: {
    type: Schema.Types.ObjectId,
    ref: "FacultyType",
    default: null
  }
};

module.exports = new Schema(schema);
