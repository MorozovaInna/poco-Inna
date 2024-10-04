let numbers = [44, 0, 14, 20, 79, 99, 38, 62, 60, 96, 55, 57, 36, 75, 58, 45, 15, 10, 24, 75, 92, 74, 78, 37, 25, 2, 41, 48, 4, 65];

function sumNumbers(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            total = total + arr[i];
        }
    }
    return total;
}

console.log(sumNumbers(numbers));