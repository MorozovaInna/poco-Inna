function askNumber() {
    let input = prompt("Please enter the numbers separated by commas and I'll calculate the sum and the average: ");
    let myArray = input.split(',');
    let parsedArray = [];
    
    for (let i = 0; i < myArray.length; i++) {
            parsedArray.push(parseInt(myArray[i].trim()))
        }
    return parsedArray;
}

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function calculateAverage (sum, arr) {
    let average = sum / arr.length;
    return average;
}

let numberArray = askNumber();
let sum = calculateSum(numberArray);
let average = calculateAverage(sum, numberArray);
console.log("The sum of the numbers you entered is " + sum + ".");
console.log("The average is " + average + ".");