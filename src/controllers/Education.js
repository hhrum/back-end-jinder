const Institution = require("../models/Educationlnstitution");
const FacultyType = require("../models/FacultyType");

class EducationController {
  async index(req, res) {
    const institutions = await Institution.find().populate("faculties");
    const faculty_types = await FacultyType.find();

    res.send({
      institutions,
      faculty_types
    });
  }
}

module.exports = new EducationController();
