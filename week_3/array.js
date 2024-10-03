let myArray = [1, 2, 3, -1];

let numberOfElements = myArray.length;

console.log(myArray[0]);


for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

printArrayInOneLine(myArray);
printArrayInOneLine(myArray, "; ");

function printArrayInOneLine(array, separator= ", ") {
    /*if (separator === undefined) {
        throw "Argument separator not set!";
    }*/
    let text = "";
    for (let i = 0; i < array.length; i++) {
        text = text + array[i];
        if (i !== array.length - 1) {
            text = text + separator;
        }
    
    }
    console.log(text); 
}