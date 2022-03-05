const Manager = require('../lib/Manager')

const manager = new Manager('TestyMcTestFace', 1, 'test@email.com', 404)

describe('Manager name', () => {
    it('returns the name', () => {
    expect(manager.getName()).toEqual('TestyMcTestFace')
        }   )
    }
)

describe('Manager ID', () => {
    it('returns the ID of the manager', () => {
        expect(manager.getId()).toEqual(expect.any(Number))
        }   )
    }
)

describe('Manager email', () => {
    it('returns the email of the manager', () => {
        expect(manager.getEmail()).toEqual('test@email.com')
        }   )
    }
)

describe('Manager office number', () => {
    it('returns the office number of the manager', () => {
        expect(manager.getOfficeNumber()).toEqual(expect.any(Number))
        }   )
    }
)

describe('Manager role', () => {
    it('returns the role of the Manager', () => {
        expect(manager.getRole()).toEqual('Manager')
        }   )
    }
)
