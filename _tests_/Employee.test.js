const Employee = require("../lib/Employee")

describe("Employee", ()=>{
   it("should take in 3 parameters: name, id, email", ()=>{
    const name = "Bob"
    const id = 1
    const email = "bob@test"

    const employee = new Employee(name, id, email)

    expect(employee.name).toEqual(name)
    expect(employee.id).toEqual(id)
    expect(employee.email).toEqual(email)
   })

   it("should throw an error if not all params are met", ()=>{
        const cb = () => 
   })
})