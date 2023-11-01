// Imports team.js
const myTeam = require("./team");

//Create an array of five team objects and assign to variable name teams
let teams = [
  new myTeam("Celtics", "Lucky", 15),
  new myTeam("Bucks", "Deer", 15),
  new myTeam("Sixers", "Goofy", 15),
  new myTeam("Raptors", "Raptor", 15),
  new myTeam("Heat", "Sun", 15),
];

//This function returns the 5 teams
module.exports.getTeams = function () {
  return teams;
};

//Could not get this to work.....
//Function returns a single team
//module.exports.getTeam = function (name) {
//  return teams.find(name);
//};

//Using Workaround if find does not work. There was no fruits example for the find function.
module.exports.getTeam = function (name) {
  for (let team of teams) {
    if (team.name === name) {
      return team;
    }
  }
};

//Display formatted string of teams
module.exports.displayTeam = function (team) {
  return (
    "Name: " +
    team.name +
    "\nMascot: " +
    team.mascot +
    "\nPlayer Count: " +
    team.playerCount +
    "\n"
  );
};
