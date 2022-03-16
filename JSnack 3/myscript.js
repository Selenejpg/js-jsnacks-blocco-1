let sommaFor = 0;

for (let i = 0; i < 10; i++) {
    const nuovoNumero = parseInt(prompt("inserisci un numero"));
    sommaFor += nuovoNumero;
}

document.getElementById("somma") = `"La somma dei numeri è:" + ${sommaFor}`


