const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = {
  _id: Schema.Types.ObjectId,
  name: String
};

module.exports = new Schema(schema);
