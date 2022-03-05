const Intern = require('../lib/Intern')

const intern = new Intern('TestyMcTestFace', 1, 'test@email.com', 'test school')

describe('Intern name', () => {
    it('returns the name', () => {
    expect(intern.getName()).toEqual('TestyMcTestFace')
        }   )
    }
)

describe('Intern ID', () => {
    it('returns the ID of the intern', () => {
        expect(intern.getId()).toEqual(expect.any(Number))
        }   )
    }
)

describe('Intern email', () => {
    it('returns the email of the intern', () => {
        expect(intern.getEmail()).toEqual('test@email.com')
        }   )
    }
)

describe('Intern school', () => {
    it('returns the school of the intern', () => {
        expect(intern.getSchool()).toEqual('test school')
        }   )
    }
)

describe('Intern role', () => {
    it('returns the role of the intern', () => {
        expect(intern.getRole()).toEqual('Intern')
        }   )
    }
)
