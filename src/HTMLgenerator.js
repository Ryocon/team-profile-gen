// generates the engineer card
const engineerGen = function (engineer) {
  return `
    <div class="w-64 h-64 bg-gray-300 rounded-lg drop-shadow-md hover:bg-slate-400">
        <h3 class="bg-teal-600 pl-4 pt-2 pb-2 rounded-t-lg">
             ${engineer.getName()}
             <br>
             ${engineer.getRole()}
             <br>
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
        </h3>
           <ul class="pl-2 pt-5">
                <li class="p-2">id: ${engineer.getId()}</li>
                <li class="p-2">email: ${engineer.getEmail()}</li>
                <li class="p-2">github: ${engineer.getGithub()}</li>
           </ul>
    </div>
`;
};

// generates the manager card
const managerGen = function (manager) {
  return `
    <div class="w-64 h-64 bg-gray-300 rounded-lg drop-shadow-md hover:bg-slate-400">
        <h3 class="bg-teal-600 pl-4 pt-2 pb-2 rounded-t-lg">
             ${manager.getName()}
             <br>
             ${manager.getRole()}
             <br>
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
             <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
             <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
             </svg>
        </h3>
           <ul class="pl-2 pt-5">
                <li class="p-2">id: ${manager.getId()}</li>
                <li class="p-2">email: ${manager.getEmail()}</li>
                <li class="p-2">office number: ${manager.getOfficeNumber()}</li>
           </ul>
    </div>
`;
};

// generates the intern card
const internGen = function (intern) {
  return `
    <div class="w-64 h-64 bg-gray-300 rounded-lg drop-shadow-md hover:bg-slate-400">
        <h3 class="bg-teal-600 pl-4 pt-2 pb-2 rounded-t-lg">
             ${intern.getName()}
             <br>
             ${intern.getRole()}
             <br>
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
             <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
             </svg>
        </h3>
           <ul class="pl-2 pt-5">
                <li class="p-2">id: ${intern.getId()}</li>
                <li class="p-2">email: ${intern.getEmail()}</li>
                <li class="p-2">school: ${intern.getSchool()}</li>
           </ul>
    </div>
`;
};

// generates the required amount of team profile cards using a for loop and invoking each function based on the role
const cardGen = (teamMembers) => {
  profileArray = [];

  for (let i = 0; i < teamMembers.length; i++) {
    const role = teamMembers[i].getRole();

    if (role === "Engineer") {
      const engineerProfile = engineerGen(teamMembers[i]);
      profileArray.push(engineerProfile);
    }

    if (role === "Manager") {
      const managerProfile = managerGen(teamMembers[i]);
      profileArray.push(managerProfile);
    }

    if (role === "Intern") {
      const internProfile = internGen(teamMembers[i]);
      profileArray.push(internProfile);
    }
  }

  const profileCards = profileArray.join("");
  const cardHTML = htmlGen(profileCards);
  return cardHTML;
};

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
    <link rel="stylesheet" href="./styles.css">
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
`;
};

module.exports = cardGen;
