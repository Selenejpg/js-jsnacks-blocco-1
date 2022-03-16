let parolaUno = prompt ("Scrivi la prima parola").length;

let parolaDue = prompt ("Scrivi la seconda parola").length;



if ( parolaUno > parolaDue) {
    document.getElementById("parolaLunga").innerHTML = `${parolaUno}`;
}else {
    document.getElementById("parolaLunga").innerHTML = `${parolaDue}`;
}