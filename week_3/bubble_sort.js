let myInput = [2, 3, 1, 5, 6];
let myOutput = bubbleSort(myInput);
printArrayInOneLine(myOutput);

function bubbleSort(input) {
    let output = input;
    for (let i = 0; i < output.length; i++) {
       let swapped = false; 
    
        for (let k = 0; k < output.length - 1; k++) {
            if (output[k] > output[k + 1]) {
                let temp_output = output[k];
                output[k] = output[k + 1];
                output[k + 1] = temp_output;
                /*[output[k], output[k + 1]] = [output[k + 1], output[k]];*/
                swapped = true;
            }
        }
    if (!swapped) {
        break;
    }
}

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
