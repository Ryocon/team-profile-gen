const Employee = require('../lib/Employee')

test('Employee has the correct data applied', () => {
    const testEmployee = new Employee('TestyMcTestFace', 1, 'test@email.com')

    expect(this.name).toEqual('TestyMcTestFace')
    expect(this.id).toEqual(number)
    expect(this.email).toEqual('test@email.com')
}
)