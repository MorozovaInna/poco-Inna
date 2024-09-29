let currentAge = Number(prompt("How old are you? "));
let retirementAge = Number(prompt("At what age would you like to retire? "));

let yearsLeft = retirementAge - currentAge;
let currentYear = 2024;
let retirementYear = currentYear + yearsLeft;

console.log("You have " + yearsLeft + " years left until you can retire. It's " + currentYear + ", so you can retire in " + retirementYear + ".")
