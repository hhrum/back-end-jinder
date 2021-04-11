const mongoose = require("mongoose");
const Resume = require("../models/Resume");
const User = require("../models/User");

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
      _id: new mongoose.Types.ObjectId(),
      user: req.user._id,
      profession: req.body.profession || null,
      competitions: req.body.competitions || null,
      time: req.body.time || null,
      salary: req.body.salary || null,
      faculty: req.body.faculty || null,
      description: req.body.description || null,
      experience: req.body.experience || null
    };

    try {
      const resume = await Resume.create(resumeData);
      await User.findByIdAndUpdate(
        req.user._id,
        { resume: resume._id },
        {
          new: true,
          useFindAndModify: false
        }
      );
      res.send(resume);
    } catch (error) {
      res.status(418).send(error);
    }
  }

  async update(req, res) {
    try {
      let resume = Resume.findById(req.params.id);

      const resumeData = {
        _id: new mongoose.Types.ObjectId(),
        user: req.user._id,
        profession: req.body.profession || resume.profession,
        time: req.body.time || resume.time,
        salary: req.body.salary || resume.salary,
        faculty: req.body.faculty || resume.faculty,
        description: req.body.description || resume.description,
        experience: req.body.experience || resume.experience
      };

      resume = await Resume.findByIdAndUpdate(
        req.params._id,
        { resumeData },
        {
          new: true,
          useFindAndModify: false
        }
      );
      res.send(resume);
    } catch (error) {
      res.status(418).send(error);
    }
  }

  destroy(req, res) {}
}

module.exports = new ResumeControler();
