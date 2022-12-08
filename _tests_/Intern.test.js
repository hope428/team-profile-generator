const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should assign params accordingly", () => {
    const name = "Cindy";
    const id = 435;
    const email = "cindy@test";
    const school = "MIT";

    const intern = new Intern(name, id, email, school);

    expect(intern.name).toEqual(name);
    expect(intern.id).toEqual(id);
    expect(intern.email).toEqual(email);
    expect(intern.school).toEqual(school);
  });
  it("should include a school param", () => {
    const intern = new Intern("Ethan", 222, "ethan@test", "MIT");

    expect("school" in intern).toBe(true);
  });
  it("should return the name of the intern's school", () => {
    const intern = new Intern("Karl", 252, "karl@test", "Univ of Penn");
    const school = intern.getSchool();

    expect(school).toEqual(intern.school);
  });
});
