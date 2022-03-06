
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


