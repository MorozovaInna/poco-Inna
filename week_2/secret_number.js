const secretNumber = 70
let number;

do {
    number = Number(prompt("Guess the secret number from 1 to 100:\n"))
    if (isNaN(number)) {
        console.log("Please enter a valid number");
    } else {
        if (number > secretNumber) {
            console.log("The secret number is smaller");
        } else if (number < secretNumber) {
            console.log("The secret number is higher");
        }
    }
} while ((secretNumber !== number));
console.log("You guessed it right! Congrats!");