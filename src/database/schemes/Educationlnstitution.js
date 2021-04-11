const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = {
  _id: Schema.Types.ObjectId,
  name: String,
  faculties: [
    {
      type: Schema.Types.ObjectId,
      ref: "Faculty",
      default: null
    }
  ],
  isHigh: {
    type: Boolean,
    default: true
  }
};

module.exports = new Schema(schema);
