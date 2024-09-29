function helloWorld(language) {
    switch (language) {
    case "de":
    return "Hallo, Welt!";
    break;
    case "fr":
    return "Salut, Monde!";
    break;
    case "es":
    return "Hola, Mundo!";
    break;
    default:
    return "Hello, World!";
    }
}

console.log(helloWorld("fr"))
console.log(helloWorld("de"))
console.log(helloWorld("es"))
console.log(helloWorld("en"))
console.log(helloWorld("it"))