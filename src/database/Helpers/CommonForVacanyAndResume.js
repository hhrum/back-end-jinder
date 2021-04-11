const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = {
  profession: {
    type: Schema.Types.ObjectId,
    ref: "Profession",
    default: null
  },
  salary: {
    type: Number,
    default: null
  },
  time: {
    type: String,
    default: "full-time"
  },
  experience: {
    type: Number,
    default: null
  },
  description: {
    type: String,
    default: null
  }
};
