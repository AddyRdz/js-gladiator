// #1: Create a `Gladiator` class that has the following properties...
// - a `name`
// - a `weapon` (one of Spear, Club, Trident)
// Type your solution immediately below this line:
class Gladiator {
  constructor(name, weapon){
    this.name = name
  this.weapon = weapon
  } 
}
// const name = ['Maximus'];
// const weapon = ['Spear','Club','Trident'];



// // #2: Create an instance of the Gladiator class with a name argument of "Maximus" and a weapon of "Trident," and assign it to a variable called `max`.
// // Type your solution immediately below this line:
// const max = new Gladiator('Maximus', 'Trident');
// console.log(max.name);
// console.log(max.weapon);


// NOTE: THE CODE BELOW IS FOR TESTING PURPOSES. DO NOT REMOVE OR ALTER.
if (!this.window && typeof Gladiator !== "undefined") {
  module.exports = {
    Gladiator,
    max,
  };
}
