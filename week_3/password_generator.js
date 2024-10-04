function generatePassword (length) {
    let generatedPassword = ""
    let myString = 'ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz!@#$%^&*()?.<\>|=+:;,[-_]0123456789';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * myString.length);
        let character = myString.charAt(randomIndex);
        generatedPassword += character;
    }
    return generatedPassword;  
}

console.log(generatePassword(12));

