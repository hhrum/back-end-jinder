const express = require("express");
const app = express();
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

//
const web = require("./routes/web");
const api = require("./routes/api");

const PORT = process.env.PORT || 8080;

const online =
  "mongodb+srv://root:root@cluster0.sic7i.mongodb.net/jinder?retryWrites=true&w=majority";
mongoose.connect(online, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const seed = require("./database/seed");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", web);
app.use("/api", api);

app.listen(PORT, () => {
  // seed();
  console.log(`Server is running at port: ${PORT}`);
});
