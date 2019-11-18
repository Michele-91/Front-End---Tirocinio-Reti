
let nome = 'Michele';
let cognome = "Spinelli";
let nomeIntero = "Michele Spinelli";
console.log(
`Nome: ${nome}, 
Cognome: ${cognome}, 
Nome per esteso: ${nomeIntero}`
);


// estrarre carattere da una stringa
let estraiLettera1 = nome.charAt(2);
let estraiLettera2 = cognome[5];
console.log(`Lettera 2: ${estraiLettera1}, Lettera 5: ${estraiLettera2}`);


// sostituire uno o più caratteri in una stringa
let nomeFemminile = nome.replace('Michele', 'Michela');
console.log(`Nome al femminile: ${nomeFemminile}`);
let nuovoCognome = cognome.replace('Spinelli', 'Rossi');
console.log(`Nuovo cognome: ${nuovoCognome}`);
let nuovoIntero = nomeIntero.replace(nomeIntero, 'Mario Rossi');
console.log(`Nuovo nome intero: ${nuovoIntero}`);


// individua sottostringa
let collezione = ["farfalle", "francobolli", "monete", "quadri"];
console.log("Le monete si trovano in posizione: " + collezione.indexOf("monete"));
console.log("I fumetti si trovano in posizione: " + collezione.indexOf("fumetti"));

// slice
let tagliato = nome.slice(3, 6);
console.log("Nome tagliato con slice: " + tagliato);
console.log("Stato della stringa originale: " + nome);

// verifica che una parola sia palindorma
let parola1 = "ingegni";
let parola2 = "tavolo";
parola1 === parola1.split('').reverse().join('') ? console.log(parola1 + ' è un palindromo') : console.log(parola1 + ' non è un palindromo');
parola2 === parola2.split('').reverse().join('') ? console.log(parola2 + ' è un palindromo') : console.log(parola2 + ' non è un palindromo');