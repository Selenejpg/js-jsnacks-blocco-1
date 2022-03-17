//Crea un array vuoto.
let array = [];

//Chiedi per 6 volte all’utente di inserire un numero,
for (let i = 0; i < 6; i++) {
    const numeroRichiesto = parseInt(prompt("Inserisci un numero"));

    //Se è dispari inseriscilo nell’array
    if (numeroRichiesto % 2 != 0) {
        array.push(numeroRichiesto);
    }
}

console.log(array);


