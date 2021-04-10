const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = {
  _id: Schema.Types.ObjectId,
  name: String,
  workers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  vacancies: [
    {
      type: Schema.Types.ObjectId,
      ref: "Vacancy"
    }
  ]
};

module.exports = new Schema(schema);
