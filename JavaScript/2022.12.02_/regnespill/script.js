
// Henter elementer fra HTML
let oppgaveEl = document.querySelector ('#oppgave')
let svarEl = document.querySelector ('#svar')
let sjekkBtn = document.querySelector ('#sjekk')
let konklusjonEl = document.querySelector ('#konklusjon')

// Lager et tilfeldig heltall mellom 0 og 9:
let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);

let produkt = a*b

/* console.log ("a =", a)
console.log ("b =", b)
console.log ("a*b =", a*b) */

// Bruker template litteral til å kombinere tekst og variabler
oppgaveEl.innerHTML = `${a} x ${b} = ?`
// dette gir samme resultat: oppgaveEl.innerHTML = a + "x" + b + "= ?"

sjekkBtn.addEventListener('click', sjekkSvar)

function sjekkSvar(){
    console.log ("sjekker svaret")
    let svar = Number(svarEl.value)

    // Sjekker om svaret er det samme som fasiten
    if (svar == produkt){
        konklusjonEl.innerHTML = "Du har rett!"
    }
    else {
        konklusjonEl.innerHTML = "Du har desverre feil"
    }
}
