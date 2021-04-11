const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = {
  profession: {
    type: Schema.Types.ObjectId,
    ref: "Profession",
    default: null
  },
  competitions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Competition",
      default: null
    }
  ],
  salary: {
    type: Number,
    default: null
  },
  time: {
    type: String,
    default: "full-time"
  },
  description: {
    type: String,
    default: null
  },
  experience: {
    type: Number,
    default: null
  }
};
