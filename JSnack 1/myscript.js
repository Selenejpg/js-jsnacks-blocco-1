let numeroUtente = prompt ("Seleziona il primo numero");

let numeroDueUtente = prompt ("Seleziona il secondo numero");


if (numeroUtente > numeroDueUtente) {
    document.getElementById("risultato").innerHTML = `${numeroUtente}`;
}else {
    document.getElementById("risultato").innerHTML = `${numeroDueUtente}`;
}