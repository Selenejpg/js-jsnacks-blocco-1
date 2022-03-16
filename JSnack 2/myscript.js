let parolaUno = prompt ("Scrivi la prima parola");

let parolaDue = prompt ("Scrivi la seconda parola");

let numeroUno = Number(parolaUno.length)

let numeroDue = Number(parolaDue.length)



if ( parolaUno < parolaDue) {
    document.getElementById("parola").innerHTML = `${parolaUno} ${parolaDue}`;
}else if (parolaUno > parolaDue){
    document.getElementById("parola").innerHTML = `${parolaDue} ${parolaUno}`;
}else {
    document.getElementById("parola").innerHTML = "Le due parole hanno la stessa lunghezza"
}