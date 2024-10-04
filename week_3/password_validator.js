let password;
const regexSpecialSymbols = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
const regexNumbers = /[0-9]/;
do {
    password = prompt("Enter your password (at least 8 characters, 1 special character, 1 number): ");

} while (!((password.length >= 8) && !(/\s/.test(password)) && (regexSpecialSymbols.test(password)) && (regexNumbers.test(password))));
