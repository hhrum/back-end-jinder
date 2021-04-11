const cors = require("cors");
const { Router } = require("express");
const router = Router();

// middlewares
const vkAuth = require("../middleware/vkAuth");

// // controllers
const Auth = require("../controllers/Auth");
const User = require("../controllers/User");
const Profession = require("../controllers/Profession");
const Education = require("../controllers/Education");
const Resume = require("../controllers/Resume");
const Vacancy = require("../controllers/Vacancy");
const Connect = require("../controllers/Connect");

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

// professions
router.get("/professions", Profession.index);

// educations
router.get("/educations", Education.index);

// Resume
router.get("/resume", Resume.index);
router.get("/resume/:id", Resume.show);
router.post("/resume", Resume.store);
router.put("/resume/:id", Resume.update);

// Vacancy
router.get("/vacancies", Vacancy.index);

// Connect
router.post("/connect/like-resume", Connect.likeResume);
router.post("/connect/cancel-resume", Connect.cancelResume);
router.post("/connect/like-vacancy", Connect.likeVacancy);
router.post("/connect/cancel-vacancy", Connect.cancelVacancy);

module.exports = router;
