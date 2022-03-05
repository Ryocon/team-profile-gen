const inquirer = require('inquirer')
const fs = require('fs')

const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')

// generate html here

// arrary for team members to be added to
const teamMembers = []

const addTeamMember = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What role is the team member you would like to add?',
            name: 'role-type',
            choices: [
                'Engineer',
                'Manager',
                'Intern',
                'None'
            ]
        }
    ])
    .then((answers) => {
        switch (answers.role-type) {
            case 'Engineer':
                engineerPrompts()
                break
            case 'Manager':
                managerPrompts()
                break
            case 'Intern':
                internPrompts()
                break
            case 'None':
                break

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
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answer.engineerGithub)
        teamMembers.push(engineer)
    }
    
    
    )
}



addTeamMember()