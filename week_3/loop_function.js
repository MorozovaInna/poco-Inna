function increment(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}

increment(1, 10);

function myFunction(arg1 = 5, arg2 = 3, arg3 = 1) {
    let result = arg1 + arg2 * arg3;
    console.log(result);
    return result;
}

myFunction();
myFunction(30, 20, 10);

function checkBalance(price, currentBalance) {
    return currentBalance >= price;
}

let hasSufficientBalance = checkBalance(30, 20);

if (hasSufficientBalance) {
    console.log("Success");
} else {
    console.log("Failure");
}
