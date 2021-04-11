var { Router } = require("express");
var router = Router();

// const Profession = require("../models/Profession");
// const EduInst = require("../models/Educationlnstitution");
// const Company = require("../models/Company");

router.get("/", async (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
