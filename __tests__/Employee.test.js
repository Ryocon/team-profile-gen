const Employee = require('../lib/Employee')

const employee = new Employee('TestyMcTestFace', 1, 'test@email.com')

describe('Employee name', () => {
    it('returns the name', () => {
    expect(employee.name).toEqual('TestyMcTestFace')
        }   )
    }
)

describe('Employee ID', () => {
    it('returns the ID of the employee', () => {
        expect(employee.id).toEqual(expect.any(Number))
        }   )
    }
)

describe('Employee email', () => {
    it('returns the email of the employee', () => {
        expect(employee.email).toEqual('test@email.com')
        }   )
    }
)