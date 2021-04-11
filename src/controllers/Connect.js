const mongoose = require("mongoose");
const Resume = require("../models/Resume");
const Vacancy = require("../models/Vacancy");
const Connect = require("../models/VacancyResumeConnect");

class ConnectController {
  async index(req, res) {
    const resume = req.body.resume;
    const vacancy = req.body.vacancy;
    let query;

    if (resume) {
      query = { resume };
    } else if (vacancy) {
      query = { vacancy };
    } else {
      res.status(404);
    }

    const connects = await Connect.find(query)
      .populate("vacancy")
      .populate("resume");

    res.send(connects);
  }

  async iLike(req, res) {
    const resume = req.body.resume;
    const vacancy = req.body.vacancy;
    let query;

    if (resume) {
      query = { resume, resumeState: "like" };
    } else if (vacancy) {
      query = { vacancy, vacancyState: "like" };
    } else {
      res.status(404);
    }

    const connects = await Connect.find(query)
      .populate("vacancy")
      .populate("resume");

    res.send(connects);
  }

  async likeMe(req, res) {
    const resume = req.body.resume;
    const vacancy = req.body.vacancy;
    let query;

    if (resume) {
      query = { resume, vacancyState: "like" };
    } else if (vacancy) {
      query = { vacancy, resumeState: "like" };
    } else {
      res.status(404);
    }

    const connects = await Connect.find(query)
      .populate("vacancy")
      .populate("resume");

    res.send(connects);
  }

  async likeResume(req, res) {
    try {
      const resume = await Resume.findById(req.body.resume);
      const vacancy = await Vacancy.findById(req.body.vacancy);

      let connect = await Connect.findOne({ resume, vacancy }).exec();
      if (!connect) {
        connect = await Connect.create({
          _id: new mongoose.Types.ObjectId(),
          resume: resume._id,
          vacancy: vacancy._id
        });
      }
      connect.vacancyState = "like";
      connect = await (await connect.save())
        .populate("resume")
        .populate("vacancy")
        .execPopulate();
      res.send(connect);
    } catch (error) {
      res.status(418);
    }
  }

  async cancelResume(req, res) {
    try {
      const resume = await Resume.findById(req.body.resume);
      const vacancy = await Vacancy.findById(req.body.vacancy);

      let connect = await Connect.findOne({ resume, vacancy }).exec();
      if (!connect) {
        connect = await Connect.create({
          _id: new mongoose.Types.ObjectId(),
          resume: resume._id,
          vacancy: vacancy._id
        });
      }
      connect.vacancyState = "dislike";
      connect = await (await connect.save())
        .populate("resume")
        .populate("vacancy")
        .execPopulate();
      res.send(connect);
    } catch (error) {
      res.status(418);
    }
  }

  async likeVacancy(req, res) {
    try {
      const resume = await Resume.findById(req.body.resume);
      const vacancy = await Vacancy.findById(req.body.vacancy);

      let connect = await Connect.findOne({ resume, vacancy }).exec();
      if (!connect) {
        connect = await Connect.create({
          _id: new mongoose.Types.ObjectId(),
          resume: resume._id,
          vacancy: vacancy._id
        });
      }
      connect.resumeState = "like";
      connect = await (await connect.save())
        .populate("resume")
        .populate("vacancy");
      res.send(connect);
    } catch (error) {
      res.status(418);
    }
  }

  async cancelVacancy(req, res) {
    try {
      const resume = await Resume.findById(req.body.resume);
      const vacancy = await Vacancy.findById(req.body.vacancy);

      let connect = await Connect.findOne({ resume, vacancy }).exec();
      if (!connect) {
        connect = await Connect.create({
          _id: new mongoose.Types.ObjectId(),
          resume: resume._id,
          vacancy: vacancy._id
        });
      }
      connect.resumeState = "dislike";
      connect = await (await connect.save())
        .populate("resume")
        .populate("vacancy")
        .execPopulate();
      res.send(connect);
    } catch (error) {
      res.status(418);
    }
  }
}

module.exports = new ConnectController();
