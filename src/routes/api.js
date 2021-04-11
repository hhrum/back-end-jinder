const cors = require("cors");
const { Router } = require("express");
const router = Router();

// middlewares
const vkAuth = require("../middleware/vkAuth");

// // controllers
const Auth = require("../controllers/Auth");
const User = require("../controllers/User");
const Resume = require("../controllers/Resume");

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

// // GET /tasks
// router.get("/tasks", Task.index);
// // GET /tasks/{id}
// router.get("/tasks/:id", Task.show);
// // POST /tasks
// router.post("/tasks", Task.store);
// // PUT /tasks/{id}
// router.put("/tasks/:id", Task.update);
// // DELETE /tasks/{id}
// router.delete("/tasks/:id", Task.destroy);

module.exports = router;
