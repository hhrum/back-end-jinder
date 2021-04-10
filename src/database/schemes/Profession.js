const mongoose = require("mongoose");

const schema = {
  _id: mongoose.Schema.Types.ObjectId,
  name: String
};

module.exports = mongoose.Schema(schema);
