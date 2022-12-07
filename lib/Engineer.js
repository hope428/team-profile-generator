const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    if (!name || !id || !email || !github) {
      throw new Error("Must have name, id, email, and github");
    }
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
