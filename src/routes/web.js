var { Router } = require("express");
var router = Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
