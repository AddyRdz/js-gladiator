// #1: Create an Arena class with the following criteria:
// -- a 'name' that is first-initial capitalized, even if input is not
// Examples:
// const megalopolis = new Arena("megalopolis");
// console.log(megalopolis.name); // => Megalopolis

// const { Gladiator } = require("./gladiator");

// const { Gladiator } = require("./gladiator");

// -- a 'gladiators' property that is initialized as an empty array

// -- an 'addGladiator' method that adds gladiators to the 'gladiators' array, and never allows more than 2 gladiators at a time
// Examples:
// const max = new Gladiator("Maximus", "Trident");
// const titus = new Gladiator("Titus", "Sword");
// const andronicus = new Gladiator("Andronicus", "Sword");
// const colosseum = new Arena("Colosseum");
// colosseum.addGladiator(max);
// colosseum.addGladiator(titus);
// colosseum.addGladiator(andronicus);
// console.log(colosseum.gladiators.length); // => 2

// -- a "fight" method that results in the elimination of one of the gladiators in the arena with the following winning conditions:
// Winning conditions
// - Trident beats Spear
// - Spear beats Club
// - Club beats Trident
// - If the two gladiators have the same weapon, they are both eliminated.
// Examples:
// const max = new Gladiator("Maximus", "Trident");
// const titus = new Gladiator("Titus", "Spear");
// const colosseum = new Arena("colosseum");
// colosseum.addGladiator(max);
// colosseum.addGladiator(titus);
// colosseum.fight();
// console.log(colosseum.gladiators); // => [max]
// Type your solution immediately below this line:

class Arena {
  constructor(nameArena, Gladiators){
  this.arenaName = nameArena[0].toUpperCase() + nameArena.substring(1);
  this.Gladiators =[]
}
  addGladiators(name1) {
    if(this.Gladiators.length ===2){
      console.log("There are two fighters in the arena already!");
    }else
  this.Gladiators.push(name1)
  }   

} const colosseum = new Arena("colosseum");
const max = new Gladiator ("Maximus", "Trident");
const titus = new Gladiator("Titus", "Spear");

colosseum.addGladiators(max)
colosseum.addGladiators(titus)

// NOTE: THE CODE BELOW IS FOR TESTING PURPOSES. DO NOT REMOVE OR ALTER.
if (!this.window && typeof Arena !== "undefined") {
  module.exports = {
    Arena,
  };
}
