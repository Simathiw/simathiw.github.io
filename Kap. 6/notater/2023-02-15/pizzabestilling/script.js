// Henter elementer fra DOM
let pizzabunnEls = document.querySelectorAll(`input[type=radio]`)
let toppingEls = document.querySelectorAll(`input[type=checkbox]`)
let storrelseEls = document.querySelectorAll(`option`)
let annetEl = document.querySelector(`textarea`)

let submitBtn = document.querySelector(`button[type=submit]`)
submitBtn.addEventListener(`click`, sendBestilling)

// Bestillingsobjekt
bestilling = {}

// Funsksjon som sender bestillingen
// event er hendelsesobjekt
// vanlig å bruke "e" eller "evt" istedenfor "event"
function sendBestilling(event){
    // Avbryter skjemaet normale utsending av data
    event.preventDefault()

    console.log(`sender bestilling`)

    // går gjennom "pizzabunn"
    for(let i=0; i<pizzabunnEls.length; i++){
        // Sjekker hvilken pizzabunn som er markert
        if (pizzabunnEls[i].checked){
            // Legger inn i bestillingsobjektet
            bestilling.bunn = pizzabunnEls[i].value
            console.log(pizzabunnEls[i].value)
        }
    }

    // Lager et array
    toppingArr = []

    for(let i=0; i<toppingEls.length; i++){
        if (toppingEls[i].checked){
            toppingArr.push(toppingEls[i].value)
        }
    }
    bestilling.topping = toppingArr
    console.log(bestilling.topping)

    for(let i=0; i<storrelseEls.length; i++){
        if (storrelseEls[i].selected){
            bestilling.storrelse = storrelseEls[i].value
        }
    }

    bestilling.annet = annetEl.value
}
