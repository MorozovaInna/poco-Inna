// this is your first group challenge (Transcribing DNA into RNA):
// An RNA string is a string formed from the alphabet containing 'A', 'C', 'G', and 'U'.
// Given a DNA string t corresponding to a coding strand, its transcribed RNA string u is formed by replacing all occurrences of 'T' in t with 'U' in u.
// Given: A DNA string t having length at most 1000 nt.
// Return: The transcribed RNA string of t.


// edge cases: 
    //check if is string / not numbers => lowercase()
    //check if the strings are only A C G U
    //check input length is 

// input option: 

// let dna = prompt('[?] Please enter DNA: ');
// let random_dna = makeid(1000);
// while (!isValid(dna)) {
//     dna = prompt('[?] Please enter DNA: ');
// }
// isValid(dna)



// Random DNA generator
function dnaGenerator(length) {
    let result = '';
    const characters = 'ACGT';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

let dna = dnaGenerator(999);
console.log('[+] DNA: ' + dna);
console.log(isValid(dna) ? '[+] DNA is valid!' : '[!] DNA is not valid');
let rna = transcription(dna);
console.log('[+] RNA: ' + rna);


function isValid(dna) {
    let dna_alphabet = ['A', 'C', 'G', 'T'];

    //check if dna length is greater than 1000
     if (dna.length >= 1000) {
        console.log('[!] DNA is too long');
        return false;
        
     }
     //check if dna length is less than 1 / empty string
    if (dna.length < 1) {
        console.log('[!] DNA is too short');
        return false;
    }
    //check if dna has only A C G T
    for (let i = 0; i < dna.length; i++) {
        if (!dna_alphabet.includes(dna[i].toUpperCase())) {
            console.log('[!] DNA is invalid');
            return false;
        }
    }
    return true;
}


function transcription(input) {

    
    for (let char of input ) {
        if (char === 'T') {
            input = input.replace('T', 'U');
        }
    }
    
    return input;
}