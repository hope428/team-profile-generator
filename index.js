const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");
let manager;
let engineers = [];
let interns = [];

const managerQuestions = [
  {
    message: "What is your manager's name?",
    type: "input",
    name: "name",
  },
  {
    message: "What is your manager's id?",
    type: "input",
    name: "id",
  },
  {
    message: "What is your manager's email?",
    type: "input",
    name: "email",
  },
  {
    message: "What is your manager's office number?",
    type: "input",
    name: "officeNumber",
  },
];

const engineerQuestions = [
  {
    message: "What is your engineer's name?",
    type: "input",
    name: "name",
  },
  {
    message: "What is your engineer's id?",
    type: "input",
    name: "id",
  },
  {
    message: "What is your engineer's email?",
    type: "input",
    name: "email",
  },
  {
    message: "What is your engineer's Gitub username?",
    type: "input",
    name: "github",
  },
];

const internQuestions = [
  {
    message: "What is your intern's name?",
    type: "input",
    name: "name",
  },
  {
    message: "What is your intern's id?",
    type: "input",
    name: "id",
  },
  {
    message: "What is your intern's email?",
    type: "input",
    name: "email",
  },
  {
    message: "What is your intern's school?",
    type: "input",
    name: "school",
  },
];

const addNext = [
  {
    message: "What type of team member would you like to add?",
    type: "list",
    choices: ["Engineer", "Intern", "None"],
    name: "next",
  },
];

function init() {
  inquirer.prompt(managerQuestions).then((res) => {
    const { name, id, email, officeNumber } = res;
    manager = new Manager(name, id, email, officeNumber);
    addEmployee();
  });
}

function addEngineer() {
  inquirer.prompt(engineerQuestions).then((res) => {
    const { name, id, email, github } = res;
    engineers.push(new Engineer(name, id, email, github));
    addEmployee();
  });
}

function addIntern() {
  inquirer.prompt(internQuestions).then((res) => {
    const { name, id, email, school } = res;
    interns.push(new Intern(name, id, email, school));
    addEmployee();
  });
}

function endInquirer() {
  //   markup generate goes here
  const html = generateHTML(manager, engineers, interns);
  fs.writeFile("./dist/index.html", html, (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}

function addEmployee() {
  inquirer.prompt(addNext).then((res) => {
    if (res.next === "Engineer") {
      addEngineer();
    } else if (res.next === "Intern") {
      addIntern();
    } else if (res.next === "None") {
      endInquirer();
    }
  });
}

init();
