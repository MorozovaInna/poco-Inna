let age = Number(prompt("How old are you? \n"));

/*if (age > 18) {
    alert("Powering On. Enjoy the ride!");
} else if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off.");
} else {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}*/

let permission = age > 18 ? "Powering On. Enjoy the ride!" : age < 18 ?  "Sorry, you are too young to drive this car. Powering off." : "Congratulations on your first year of driving. Enjoy the ride!";

console.log(permission);