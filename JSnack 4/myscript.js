//Crea un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
let invitati = ["Piero", "Giovanni", "Annibale", "Mariottide"];

//Chiedi all’utente il suo nome 
let utente = prompt("Come ti chiami?");

//Comunicagli se può partecipare o no alla festa

let nomeInvitato = false;

for (let i = 0; i < invitati.length; i++){
    if (invitati[i] == utente) {
        nomeInvitato = true
    }
}

if (nomeInvitato == true) {
    document.getElementById("accesso").innerHTML = `Benvenuto alla festa del grande Gatsby`;
}else {
    document.getElementById("accesso").innerHTML = `Non sei stato invitato.`;
}