let firstNumber = Number(prompt("Please enter the first number: "));

if (isNaN(firstNumber)) {
    console.log("Please provide valid numbers!");
    return;
}

let secondNumber = Number(prompt("Please enter the second number: "));

if (isNaN(secondNumber)) {
    console.log("Please provide valid numbers!");
    return;
}

let operation = prompt("Please choose the operation: + - * / ");

switch (operation) {
    case "+":
    console.log(firstNumber + secondNumber);
    break;
    case "-":
    console.log(firstNumber - secondNumber);
    break;
    case "*":
    console.log(firstNumber * secondNumber);
    break;
    case "/":
    if (secondNumber !== 0) {
        console.log(firstNumber / secondNumber);
    } else {
        console.log("You can't divide by 0!");
    }
    break;
    default:
    console.log("Invalid operator");
}