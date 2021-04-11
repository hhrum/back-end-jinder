const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = {
  _id: Schema.Types.ObjectId,
  vkId: Number,
  first_name: {
    type: String,
    default: ""
  },
  last_name: {
    type: String,
    default: ""
  },
  resume: {
    type: Schema.Types.ObjectId,
    ref: "Resume",
    default: null
  }
};

module.exports = new Schema(schema);
