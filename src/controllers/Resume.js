const Resume = require("../models/Resume");

class ResumeControler {
  index(req, res) {}

  async show(req, res) {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      res.status(404).send();
    }

    res.send(resume);
  }

  async store(req, res) {
    const resumeData = {
      user: req.user._id,
      profession: req.body.profession || null,
      competitions: req.body.competitions || null,
      time: req.body.time || "full-time",
      salary: req.body.salary || null,
      education: req.body.education || null,
      description: req.body.description || null,
      experience: req.body.experience || null
    };

    try {
      const resume = await Resume.create(resumeData);
      res.send(resume);
    } catch (error) {
      res.status(418).send(error);
    }
  }

  update(req, res) {}

  destroy(req, res) {}
}

module.exports = new ResumeControler();
