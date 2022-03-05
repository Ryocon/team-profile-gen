const Employee = require('../lib/Employee')

const employee = new Employee('TestyMcTestFace', 1, 'test@email.com')

describe('Employee name', () => {
    it('returns the name', () => {
    expect(employee.getName()).toEqual('TestyMcTestFace')
        }   )
    }
)

describe('Employee ID', () => {
    it('returns the ID of the employee', () => {
        expect(employee.getId()).toEqual(expect.any(Number))
        }   )
    }
)

describe('Employee email', () => {
    it('returns the email of the employee', () => {
        expect(employee.getEmail()).toEqual('test@email.com')
        }   )
    }
)

describe('Employee role', () => {
    it('returns the role of the employee', () => {
        expect(employee.getRole()).toEqual('Employee')
        }   )
    }
)
