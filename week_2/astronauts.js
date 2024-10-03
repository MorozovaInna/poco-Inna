let fuelLevel = 0;
let astronautsOnBoard = 0;
let altitude = 0;

while (true) {
    fuelLevel = Number(prompt("Please enter the correct fuel level: "))
    if ((fuelLevel > 5000) && (fuelLevel < 30000)) {
        console.log("You entered the right value!");
        break;
    } else {
    console.log("Fuel level must be greater than 5000 and less than 30000.");
    }
}

while (true) {
    astronautsOnBoard = Number(prompt("Please enter the correct number of the astronauts: "))
    if ((astronautsOnBoard >= 1) && (astronautsOnBoard <= 7)) {
        console.log("You entered the right number!");
        break;
    } else {
    console.log("Number of astronauts must be between 1 and 7.");
    }
}

while (fuelLevel >= astronautsOnBoard * 100) {
    fuelLevel -= astronautsOnBoard * 100;
    altitude += 50;
}

console.log("Shuttle reached an altitude of " + altitude + " km with " +fuelLevel + " units of fuel remaining.");