const inquirer = require('inquirer')
const fs = require('fs')

const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')

const cardGen = require('./src/HTMLgenerator')

// array for team members to be added to
const teamMembers = []

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
                'None'
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
            case 'None':
                writeToFile('index.html', teamMembers)
                break;
                

        }
    }
    )
}

const engineerPrompts = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the enigneers name?',
            name: 'engineerName'
        },
        {
            type: 'input',
            message: 'What is the engineers ID number?',
            name: 'engineerID'
        },
        {
            type: 'input',
            message: 'What is the engineers email address?',
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: 'What is the engineers Github username?',
            name: 'engineerGithub'
        }
    ])
    .then((answers) => {
        console.log(answers)
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub)
        teamMembers.push(engineer)
        console.log(teamMembers)
        addTeamMember()
    }
    )
}

const managerPrompts = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the managers name?',
            name: 'managerName'
        },
        {
            type: 'input',
            message: 'What is the managers ID number?',
            name: 'managerID'
        },
        {
            type: 'input',
            message: 'What is the managers email address?',
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: 'What is the managers office number?',
            name: 'managerOffice'
        }
    ])
    .then((answers) => {
        console.log(answers)
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice)
        teamMembers.push(manager)
        console.log(teamMembers)
        addTeamMember()
    }
    )
}


const internPrompts = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the interns name?',
            name: 'internName'
        },
        {
            type: 'input',
            message: 'What is the interns ID number?',
            name: 'internID'
        },
        {
            type: 'input',
            message: 'What is the interns email address?',
            name: 'internEmail'
        },
        {
            type: 'input',
            message: 'What is the interns school?',
            name: 'internSchool'
        }
    ])
    .then((answers) => {
        console.log(answers)
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
        teamMembers.push(intern)
        console.log(teamMembers)
        addTeamMember()
    }
    )
}


function writeToFile(fileName, teamMembers) {
    // ? ternary operator used instead of if else statement
    fs.writeFile('./dist/index.html', cardGen(teamMembers), (err) => (err ? console.log(err) : console.log('File Written!')))
}


addTeamMember()

