let myInput = [9, 3, 2, 5, 7, 23, 20];
let myOutput = bubbleSort(myInput);
printArrayInOneLine(myOutput);

function bubbleSort(input) {
    let output = input;
    let swapped;
    do {
        swapped = false;
        for (let k = 0; k < output.length - 1; k++) {
            if (output[k] > output[k + 1]) {
                let temp_output = output[k];
                output[k] = output[k + 1];
                output[k + 1] = temp_output;
                /*[output[k], output[k + 1]] = [output[k + 1], output[k]];*/
                swapped = true;
            }
        }
    } while (swapped);
    return output;
}

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