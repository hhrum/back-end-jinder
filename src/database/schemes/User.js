const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = {
  _id: Schema.Types.ObjectId,
  vkId: Number
};

module.exports = new Schema(schema);
