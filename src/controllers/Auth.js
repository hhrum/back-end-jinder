class AuthController {
  auth(req, res) {
    res.send({
      user: req.user
    });
  }
}

module.exports = new AuthController();
