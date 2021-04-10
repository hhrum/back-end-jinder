var { Router } = require("express");
var router = Router();

// // controllers
// const Task = require("../controllers/Task");

router.get("/", (req, res) => {
  res.send("Its Work!!");
});

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
