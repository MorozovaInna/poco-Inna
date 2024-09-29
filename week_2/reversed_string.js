let myArray = [1, 5, 'LC101', 'blue', 42];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

let message = "LaunchCode";
let reversedString = ""

for (let i = message.length - 1; i >= 0; i--) {
        reversedString += message[i];
}
for (let i = 0; i <= reversedString.length -1; i++) {
   console.log(reversedString[i]) 
}


