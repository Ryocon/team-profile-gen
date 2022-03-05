const Engineer = require ('../lib/Engineer')

const engineer = new Engineer('TestyMcTestFace', 1, 'test@email.com', 'githubtest')

describe('Engineer name', () => {
    it('returns the name of the engineer', () => {
    expect(engineer.name).toEqual('TestyMcTestFace')
        }   )
    }
)

describe('Engineer ID', () => {
    it('returns the ID of the engineer', () => {
        expect(engineer.id).toEqual(expect.any(Number))
        }   )
    }
)

describe('engineer email', () => {
    it('returns the email of the engineer', () => {
        expect(engineer.email).toEqual('test@email.com')
        }   )
    }
)

describe('Github User', () => {
    it('returns the github for the engineer', () => {
    expect(engineer.github).toEqual('githubtest')
        }   )
    }
)