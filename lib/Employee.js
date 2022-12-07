class Employee {
  constructor(name, id, email) {
    if(!name || !id || !email){
      throw new Error("Needs at least a name, id, and email!")
    }

    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee
