let birthDate = new Date(prompt("Please enter your birth date in the format mm/dd/yyyy: "));
let futureDate = new Date(prompt("Please enter a future date in the format mm/dd/yyyy: "));
let age = Math.trunc((futureDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25))
let day = futureDate.getDate();
let month = futureDate.getMonth() + 1;
let year = futureDate.getFullYear();

console.log("On " + day + "." + month + "." + year + " I will be " + age + ".")