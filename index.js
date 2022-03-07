// all imports required for the script to function
const inquirer = require('inquirer')
const fs = require('fs')

const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')

// import to where the html will be generated
const cardGen = require('./src/HTMLgenerator')

// array for team members to be added to
const teamMembers = []

// prompts for user input
// it will loop through the functions using the switch statement and add to the teamMembers array until 'No more at this is selected' which invoke the writeToFile function
const addTeamMember = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What role is the team member you would like to add?',
            name: 'role',
            choices: [
                'Engineer',
                'Manager',
                'Intern',
                'No More at this time'
            ]
        }
    ])
    .then((answers) => {
        switch (answers.role) {
            case 'Engineer':
                engineerPrompts()
                break;
            case 'Manager':
                managerPrompts()
                break;
            case 'Intern':
                internPrompts()
                break;
            case 'No More at this time':
                writeToFile('index.html', teamMembers)
                break;
        }
    }
    )
}

// prompts for the engineer class
const engineerPrompts = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the enigneers name?',
            name: 'engineerName',
            validate: (input) => {
                if (!input) {
                    return 'Please provide a name!'
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            message: 'What is the engineers ID number?',
            name: 'engineerID',
            validate: (input) => {
                if (isNaN(input)) {
                    console.log(' <--- Please input a number!') 
                    return false
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            message: 'What is the engineers email address?',
            name: 'engineerEmail',
            validate: (input) => {
                if (!input) {
                    return 'Please provide an email address!'
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            message: 'What is the engineers Github username?',
            name: 'engineerGithub',
            validate: (input) => {
                if (!input) {
                    return 'Please provide a Github user!'
                } else {
                    return true
                }
            }
        }
    ])
    .then((answers) => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub)
        teamMembers.push(engineer)
        console.log(teamMembers)
        addTeamMember()
    }
    )
}

// prompts for the manager class
const managerPrompts = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the managers name?',
            name: 'managerName',
            validate: (input) => {
                if (!input) {
                    return 'Please provide a name!'
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            message: 'What is the managers ID number?',
            name: 'managerID',
            validate: (input) => {
                if (isNaN(input)) {
                    console.log(' <--- Please input a number!') 
                    return false
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            message: 'What is the managers email address?',
            name: 'managerEmail',
            validate: (input) => {
                if (!input) {
                    return 'Please provide an email address!'
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            message: 'What is the managers office number?',
            name: 'managerOffice',
            validate: (input) => {
                if (isNaN(input)) {
                    console.log(' <--- Please input a number!') 
                    return false
                } else {
                    return true
                }
            }
        }
    ])
    .then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice)
        teamMembers.push(manager)
        console.log(teamMembers)
        addTeamMember()
    }
    )
}

// prompts for the intern class
const internPrompts = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the interns name?',
            name: 'internName',
            validate: (input) => {
                if (!input) {
                    return 'Please provide a name!'
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            message: 'What is the interns ID number?',
            name: 'internID',
            validate: (input) => {
                if (isNaN(input)) {
                    console.log(' <--- Please input a number!') 
                    return false
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            message: 'What is the interns email address?',
            name: 'internEmail',
            validate: (input) => {
                if (!input) {
                    return 'Please provide an email address!'
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            message: 'What is the interns school?',
            name: 'internSchool',
            validate: (input) => {
                if (!input) {
                    return 'Please provide a school!'
                } else {
                    return true
                }
            }
        }
    ])
    .then((answers) => {
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
        teamMembers.push(intern)
        console.log(teamMembers)
        addTeamMember()
    }
    )
}

// function that writes the index.html file in the correct folder
function writeToFile(fileName, teamMembers) {
    // ? ternary operator used instead of if else statement
    fs.writeFile('./dist/index.html', cardGen(teamMembers), (err) => (err ? console.log(err) : console.log('File Written!')))
}

// function that initialises the script
addTeamMember()

