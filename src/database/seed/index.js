const mongoose = require("mongoose");

//models
const Profession = require("../../models/Profession");
const FacultyType = require("../../models/FacultyType");
const Educationlnstitution = require("../../models/Educationlnstitution");
const Faculty = require("../../models/Faculty");
const Company = require("../../models/Company");
const Vacancy = require("../../models/Vacancy");

module.exports = async () => {
  // Professions
  await Profession.deleteMany({});

  const urist = await Profession.create({
    _id: new mongoose.Types.ObjectId(),
    name: "Юрист"
  });
  const coder = await Profession.create({
    _id: new mongoose.Types.ObjectId(),
    name: "Программист"
  });

  // Faculties Types
  await FacultyType.deleteMany({});

  const bakalavr = FacultyType.create({
    _id: new mongoose.Types.ObjectId(),
    name: "Бакалавриат"
  });
  const specialitet = FacultyType.create({
    _id: new mongoose.Types.ObjectId(),
    name: "Специалитет"
  });

  // Institutions
  await Educationlnstitution.deleteMany({});

  const utmn = await Educationlnstitution.create({
    _id: new mongoose.Types.ObjectId(),
    name: "Тюменский Государственный Университет"
  });

  const tiu = await Educationlnstitution.create({
    _id: new mongoose.Types.ObjectId(),
    name: "Тюменский Индустриальный Университет"
  });

  const tiuCollege = await Educationlnstitution.create({
    _id: new mongoose.Types.ObjectId(),
    name: "Многопрофильный колледж при ТИУ",
    isHigh: false
  });

  // faculties
  await Faculty.deleteMany({});

  let faculty = await Faculty.create({
    _id: new mongoose.Types.ObjectId(),
    name: "Судебная и прокурорская деятельность (ИГИП)",
    faculty_type: bakalavr._id
  });

  await Educationlnstitution.addFaculty(utmn._id, faculty._id);

  faculty = await Faculty.create({
    _id: new mongoose.Types.ObjectId(),
    name: "Информационная безопасность автоматизированных систем (ИМИКН)",
    faculty_type: specialitet._id
  });

  await Educationlnstitution.addFaculty(utmn._id, faculty._id);

  faculty = await Faculty.create({
    _id: new mongoose.Types.ObjectId(),
    name: "Информационные системы и технологии",
    faculty_type: bakalavr._id
  });

  await Educationlnstitution.addFaculty(tiu._id, faculty._id);

  faculty = await Faculty.create({
    _id: new mongoose.Types.ObjectId(),
    name:
      "Математическое обеспечение и администрирование информационных систем",
    faculty_type: bakalavr._id
  });

  await Educationlnstitution.addFaculty(tiu._id, faculty._id);

  faculty = await Faculty.create({
    _id: new mongoose.Types.ObjectId(),
    name: "Программирование (Фантазия закончилась)"
  });

  await Educationlnstitution.addFaculty(tiuCollege._id, faculty._id);

  faculty = await Faculty.create({
    _id: new mongoose.Types.ObjectId(),
    name: "Прикладная информатика (Фантазия закончилась)"
  });

  await Educationlnstitution.addFaculty(tiuCollege._id, faculty._id);

  // Companies
  await Company.deleteMany({});

  const sud = await Company.create({
    _id: new mongoose.Types.ObjectId(),
    name: "Суд"
  });
  const internet = await Company.create({
    _id: new mongoose.Types.ObjectId(),
    name: "Интернет"
  });

  // Vacancies
  await Vacancy.deleteMany({});

  let vacancy = await Vacancy.create({
    _id: new mongoose.Types.ObjectId(),
    // company: sud._id,
    profession: urist._id,
    salary: 50000,
    experience: 0,
    description: "Предлагаем стажировку прокурорской деятельности студенту"
  });

  await Company.addVacancy(sud._id, vacancy._id);

  vacancy = await Vacancy.create({
    _id: new mongoose.Types.ObjectId(),
    company: sud._id,
    profession: urist._id,
    salary: 80000,
    experience: 4,
    description: "Вакансия судьи в провинции"
  });

  await Company.addVacancy(sud._id, vacancy._id);

  vacancy = await Vacancy.create({
    _id: new mongoose.Types.ObjectId(),
    company: internet._id,
    profession: coder._id,
    salary: 50000,
    experience: 2,
    time: "half-time",
    description: "Веб разработчик на пол ставки"
  });

  await Company.addVacancy(internet._id, vacancy._id);

  vacancy = await Vacancy.create({
    _id: new mongoose.Types.ObjectId(),
    company: internet._id,
    profession: coder._id,
    salary: 50000,
    experience: 0,
    isHigh: false,
    description: "Стажировка для студента программиста СУЗа"
  });

  await Company.addVacancy(internet._id, vacancy._id);
};
