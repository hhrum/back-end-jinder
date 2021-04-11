const User = require("../models/User");

class UserController {
  index(req, res) {
    res.send(req.user);
  }

  async show(req, res) {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).send();
    }

    res.send(user);
  }
}

module.exports = new UserController();
