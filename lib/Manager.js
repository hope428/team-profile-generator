const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    if(!name || !id || !email || !officeNumber){
      throw new Error ("Manager needs name, id, email, office number")
    }
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber(){
    return this.officeNumber
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
