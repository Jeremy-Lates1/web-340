// Imports team.js
const myTeamManager = require("./team-manager");

//Get an array of team objects from the team-manager.js file
let teams = myTeamManager.getTeams();

//Display the contents of the teams array
console.log("-- DISPLAYING TEAMS --");
for (let team of teams) {
  console.log(myTeamManager.displayTeam(team));
}

//Get Single Team Celtics
const celtics = myTeamManager.getTeam("Celtics");

//Get Single Team Bucks
const bucks = myTeamManager.getTeam("Bucks");

// Displays the contents of the celtics variable
console.log("-- DISPLAYING A SINGLE TEAM --");
console.log(myTeamManager.displayTeam(celtics));

// Displays the contents of the bucks variable
console.log("-- DISPLAYING A SINGLE TEAM --");
console.log(myTeamManager.displayTeam(bucks));
