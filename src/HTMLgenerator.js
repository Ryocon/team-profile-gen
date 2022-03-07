const Employee = require("../lib/Employee")

const engineerGen = function(engineer) {
    return `
    <div class="w-64 h-64 bg-gray-300 rounded-lg drop-shadow-md hover:bg-slate-400">
        <h3 class="bg-teal-600 pl-4 pt-2 pb-2 rounded-t-lg">
             ${engineer.name}
             <br>
             ${engineer.role}
        </h3>
           <ul class="pl-2 pt-5">
                <li class="p-2">${engineer.id}</li>
                <li class="p-2">${engineer.email}</li>
                <li class="p-2">${engineer.github}</li>
           </ul>
    </div>
`
}

const managerGen = function(manager) {
    return `
    <div class="w-64 h-64 bg-gray-300 rounded-lg drop-shadow-md hover:bg-slate-400">
        <h3 class="bg-teal-600 pl-4 pt-2 pb-2 rounded-t-lg">
             ${manager.name}
             <br>
             ${manager.role}
        </h3>
           <ul class="pl-2 pt-5">
                <li class="p-2">${manager.id}</li>
                <li class="p-2">${manager.email}</li>
                <li class="p-2">${manager.officeNumber}</li>
           </ul>
    </div>
`
}

const internGen = function(intern) {
    return `
    <div class="w-64 h-64 bg-gray-300 rounded-lg drop-shadow-md hover:bg-slate-400">
        <h3 class="bg-teal-600 pl-4 pt-2 pb-2 rounded-t-lg">
             ${intern.name}
             <br>
             ${intern.role}
        </h3>
           <ul class="pl-2 pt-5">
                <li class="p-2">${intern.id}</li>
                <li class="p-2">${intern.email}</li>
                <li class="p-2">${intern.school}</li>
           </ul>
    </div>
`
}


const cardGen = (teamMembers) => {

    profileArray = []

    for (let i = 0; i < teamMembers.length; i++) {

        // const teamMembers = profiles[i]
        const role = teamMembers[i].getRole()
        

        if (role === 'Engineer') {
            const engineerProfile = engineerGen()
            profileArray.push(engineerProfile)
        }

        if (role === 'Manager') {
            const managerProfile = managerGen()
            profileArray.push(managerProfile)
        }

        if (role === 'Intern') {
            const internProfile = internGen()
            profileArray.push(internProfile)
        }
    }

    const profileCards = profileArray.join('')
    console.log(profileCards)
    // finish function

    const cardHTML = htmlGen(profileCards)
    return cardHTML

}



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

module.exports = htmlGen