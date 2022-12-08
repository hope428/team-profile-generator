const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should take in four params and assign them respectively", () => {
    const name = "Jen";
    const id = 342;
    const email = "jen@test";
    const github = "jensgithub";

    const engineer = new Engineer(name, id, email, github);

    expect(engineer.name).toEqual(name);
    expect(engineer.id).toEqual(id);
    expect(engineer.email).toEqual(email);
    expect(engineer.github).toEqual(github);
  });
  it("should throw an error if there are less than 4 params", () => {
    const name = "Ralph";
    const id = 243;
    const email = "ralph@test";

    const cb = () => new Engineer(name, id, email);

    expect(cb).toThrow();
  });

  it("should return the engineers github name", () => {
    const name = "Dave";
    const id = 2222;
    const email = "Dave@test";
    const github = "DaveG";

    const account = new Engineer(name, id, email, github).getGithub();

    expect(account).toEqual(github);
  });
});
