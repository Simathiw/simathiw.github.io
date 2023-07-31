// Henter elementer fra DOM
let oppgaveEl = document.querySelector('#oppgave')
let svarEl = document.querySelector('#svar')
let sjekkBtn = document.querySelector('#sjekk')
let nyBtn = document.querySelector('#ny')
let konklusjonEl = document.querySelector('#konklusjon')

/* Global variabel for fasiten */
let fasit

/* Trekker første oppgave ved å kalle på funksjonen */
nyOppgave()

/* Funksjon som lager en ny oppgave */
function nyOppgave(){
    /* Nullstiller input feltet */
    svarEl.value = ""
    svarEl.classList.remove("wrong")
    svarEl.classList.remove("correct")

    /* Nullstiller knappene */
    sjekkBtn.style.display = "inline-block"
    nyBtn.style.display = "none"

    /* nullstiller konkluksjon feltet */
    konklusjonEl.innerHTML = ""

    // Lager et tilfeldig heltall mellom 0 og 9
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);

    let produkt = a*b

    /* Oppdatetrer variabelen fasit */
    fasit = produkt

    // Bruker template literal til å kombinere tekst og variabler
    oppgaveEl.innerHTML = `${a} x ${b} = ?`
}

// Funksjon som sjekker om vi har rett svar
function sjekkSvar(){
    console.log("Sjekker svaret")
    
    // Henter verdien fra input elementet. Gjør om til tall
    let svar = Number(svarEl.value)
    
    // Sjekker om svaret er det samme som fasiten
    if (svar == fasit){
        konklusjonEl.innerHTML = "Du har rett!"
        /* Legger til klassen "correct" i imput elementet */
        svarEl.classList.add("correct")
        /* svarEl.className.innerHTML += "correct" */
    } 
    else {
        konklusjonEl.innerHTML = "Du har dessverre feil..."
        /* Legger til klassen "wrong" i imput elementet */
        svarEl.classList.add("wrong")
    }

    /* Sjuler knappen som sjekker svaret */
    sjekkBtn.style.display = "none"
    
    /* Viser knappen som lager ny oppgave */
    nyBtn.style.display = "inline-block"
}


// Legger til lyttere til knappene
sjekkBtn.addEventListener('click', sjekkSvar)
nyBtn.addEventListener('click', nyOppgave)
