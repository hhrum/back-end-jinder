const cors = require("cors");
const { Router } = require("express");
const router = Router();

// middlewares
const vkAuth = require("../middleware/vkAuth");

// // controllers
const Auth = require("../controllers/Auth");
const User = require("../controllers/User");
const Resume = require("../controllers/Resume");
const Vacancy = require("../controllers/Vacancy");

router.use(cors());
router.use(vkAuth);

router.get("/", (req, res) => {
  res.send(req.user);
});

//Auth
router.get("/auth", Auth.auth);

// User index
router.get("/users", User.index);
router.get("/users/:id", User.show);
// router.put("/users/:id", User.update);

// Resume
router.get("/resume", Resume.index);
router.get("/resume/:id", Resume.show);
router.post("/resume", Resume.store);

// Vacancy
router.get("/vacancies", Vacancy.index);

module.exports = router;
