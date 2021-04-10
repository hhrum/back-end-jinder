const express = require("express");
const app = express();

const bodyParser = require("body-parser");

//
const web = require("./routes/web");
const api = require("./routes/api");

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", web);
app.use("/api", api);

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
