function getNumber(promptMessage) {
    let number;
    do {
        let input = prompt(promptMessage);
        if (input === "") {
            console.log("Input cannot be empty. Please enter a valid number!");
            continue;
        } 
        number = Number(input);
    } while (isNaN(number));
    return number;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        throw new Error("You can't divide by 0!");
    }
}

function calculate(num1, num2) {
    let operation = prompt("Please choose the operation: + - * / ");
    switch (operation) {
    case "+":
        return add(num1, num2);
    case "-":
        return subtract(num1, num2);
    case "*":
        return multiply(num1, num2);
    case "/":
        return divide(num1, num2);
    default:
        throw new Error("Invalid operator");
    }
}

let firstNumber = getNumber("Please enter the first number: ");
let secondNumber = getNumber("Please enter the second number: ");

console.log(calculate(firstNumber, secondNumber));