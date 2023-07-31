
// Lager spørsmålsobjekt
let question1 = {
    question: "Hvem oppfant JavaScript?",
    options: ["Brendan Eich", "Larry Wall", "Rasmus Lerdorf"],
    solution: "Brendan Eich"
}

let question2 = {
    question: "JavaScript er det samme som Java",
    options: ["Ja", "Nei"],
    solution: "Nei"
}

let question3 = {
    question: "Når ble JavaScript oppfunnet?",
    options: ["1992", "1993", "1994", "1995"],
    solution: "1995"
}

let question4 = {
    question: "Hva er et gyldig variabelnavn i JavaScript?",
    options: ["maks-verdi", "maks_verdi", "maks verdi", "maks.verdi"],
    solution: "maks_verdi"
}

// Array med spørsmålsobjekter
let questions = [question1, question2, question3, question4]

// Målet er å få JavaScript til å skrive spørsmålene til HTML

// Henter elementer fra DOM
let quizContainerEl = document.querySelector('.quiz-container')

let buttonEl = document.querySelector('button')

let restultatEl = document.querySelector(`#resultat`)

let kommentarEl = document.querySelector(`.resultat`)

// Tømmer HTML til quiz containeren
quizContainerEl.innerHTML = ""

// Går gjennom spørsmålene
for (let i=0; i<questions.length; i++){
    // Henter spørsmålet
    let question = questions[i].question

    // Henter alternativene
    let options = questions[i].options

    // Henter fasiten
    let solution = questions[i].solution

    quizContainerEl.innerHTML += `
    <article id="question${i+1}">
        <h3>${question}</h3>
    </article>
    `

    // Henter elementet alternantivene skal skrives i
    let questionEl = document.querySelector(`#question${i+1}`)

    // Går gjennom alternativene
    for (let j=0; j<options.length; j++){
        // Lager label element
        let labelEl = document.createElement('label')

        // Lager et input element
        let radioEl = document.createElement('input')

        // Setter typen til imput elementet til radio
        radioEl.type = "radio"

        // Sørger for at alle altenativene til spørsmålene er i samme gruppe
        radioEl.name = `q${i+1}`

        if (options[j] == solution){
            radioEl.value = "c" // c = correct
        }
        else {
            radioEl.value = "w" // w = wrong
        }

        // Legger radio elementet med type radio i label elementet
        labelEl.appendChild(radioEl)

        // Skriver alternativene til HTML
        labelEl.innerHTML += options[j]

        // Legger label elementet inni question elementet
        questionEl.appendChild(labelEl)
    }
}

// Legger en lytter til knappen som skjekker svar
buttonEl.addEventListener(`click`, finnPoeng)

// Funksjon som finner poeng basert på antall rette svar
function finnPoeng(){
    let poeng = 0

    // Henter alle radio-elementene
    let radioEls = document.querySelectorAll(`input`)

    // Går gjennom alle radio-elementene
    for (let i=0; i<radioEls.length; i++){
        // skjekker om et element er krysset av
        if (radioEls[i].checked){
            // Skjekker om alternativet som ble valgt er korrekt
            if (radioEls[i].value == "c"){
                // Øker anntal poeng
                poeng ++
            }
        }
    }

    // Skriver til resultat elementet
    /* restultatEl.innerHTML = `Du fikk ${poeng}/${questions.length} poeng` */
    let poengsum = (poeng / questions.length) * 100
    if (poengsum > 80){
        kommentarEl.innerHTML = `Du fikk ${poengsum}% riktig.`
        kommentarEl.innerHTML = `Bra jobbet!`
    }
    else if (poengsum > 50-80){
        kommentarEl.innerHTML = `Du fikk ${poengsum}% riktig.`
        kommentarEl.innerHTML = `Prøv igjen., du klarer det`
    }
    else if (poengsum < 20){
        kommentarEl.innerHTML = `Du fikk ${poengsum}% riktig.`
        kommentarEl.innerHTML = `Se gjennom stoffet en gang til`
    }
    restultatEl.innerHTML = `Du fikk ${poengsum}% riktig.`
}