const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = {
  profession: {
    type: Schema.Types.ObjectId,
    ref: "Profession"
  },
  experience: Boolean
};
