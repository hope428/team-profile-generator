const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should assign params passed in", () => {
    const name = "Mike";
    const id = 2395;
    const email = "mike@test";
    const officeNumber = 255;

    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.name).toEqual(name);
    expect(manager.id).toEqual(id);
    expect(manager.email).toEqual(email);
    expect(manager.officeNumber).toEqual(officeNumber);
  });
  it("should return office number", () => {
    const name = "Mike";
    const id = 2395;
    const email = "mike@test";
    const officeNumber = 255;

    const office = new Manager(name, id, email, officeNumber).getOfficeNumber();

    expect(office).toEqual(officeNumber);
  });
  it("should return manager", () => {
    const name = "Mike";
    const id = 2395;
    const email = "mike@test";
    const officeNumber = 255;

    const role = new Manager(name, id, email, officeNumber).getRole();

    expect(role).toEqual("Manager");
  });
});
