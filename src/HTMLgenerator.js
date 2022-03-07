// generates the engineer card
const engineerGen = function(engineer) {
    return `
    <div class="w-64 h-64 bg-gray-300 rounded-lg drop-shadow-md hover:bg-slate-400">
        <h3 class="bg-teal-600 pl-4 pt-2 pb-2 rounded-t-lg">
             ${engineer.getName()}
             <br>
             ${engineer.getRole()}
        </h3>
           <ul class="pl-2 pt-5">
                <li class="p-2">${engineer.getId()}</li>
                <li class="p-2">${engineer.getEmail()}</li>
                <li class="p-2">${engineer.getGithub()}</li>
           </ul>
    </div>
`
}

// generates the manager card
const managerGen = function(manager) {
    return `
    <div class="w-64 h-64 bg-gray-300 rounded-lg drop-shadow-md hover:bg-slate-400">
        <h3 class="bg-teal-600 pl-4 pt-2 pb-2 rounded-t-lg">
             ${manager.getName()}
             <br>
             ${manager.getRole()}
        </h3>
           <ul class="pl-2 pt-5">
                <li class="p-2">${manager.getId()}</li>
                <li class="p-2">${manager.getEmail()}</li>
                <li class="p-2">${manager.getOfficeNumber()}</li>
           </ul>
    </div>
`
}

// generates the intern card
const internGen = function(intern) {
    return `
    <div class="w-64 h-64 bg-gray-300 rounded-lg drop-shadow-md hover:bg-slate-400">
        <h3 class="bg-teal-600 pl-4 pt-2 pb-2 rounded-t-lg">
             ${intern.getName()}
             <br>
             ${intern.getRole()}
        </h3>
           <ul class="pl-2 pt-5">
                <li class="p-2">${intern.getId()}</li>
                <li class="p-2">${intern.getEmail()}</li>
                <li class="p-2">${intern.getSchool()}</li>
           </ul>
    </div>
`
}

// generates the required amount of team profile cards using a for loop and invoking each function based on the role
const cardGen = (teamMembers) => {

    profileArray = []

    for (let i = 0; i < teamMembers.length; i++) {

        const role = teamMembers[i].getRole()
        
        if (role === 'Engineer') {
            const engineerProfile = engineerGen(teamMembers[i])
            profileArray.push(engineerProfile)
        }

        if (role === 'Manager') {
            const managerProfile = managerGen(teamMembers[i])
            profileArray.push(managerProfile)
        }

        if (role === 'Intern') {
            const internProfile = internGen(teamMembers[i])
            profileArray.push(internProfile)
        }
    }

    const profileCards = profileArray.join('')
    const cardHTML = htmlGen(profileCards)
    return cardHTML

}

// generates the html page and places the profile cards within
// html is styled using TailwindCSS
const htmlGen = (prolfileCards) => {
    return `
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="./dist/styles.css">
</head>
<body>
    <div class="h-32 bg-pink-600 flex justify-center pt-12">
        <h1 class="text-2xl">The Team</h1>
    </div>
        
    <div class="grid grid-cols-4 gap-10 p-8">
          
         ${prolfileCards}

    </div>
    
</body>
</html>
`
}

module.exports = cardGen