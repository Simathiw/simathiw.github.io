
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

// Array med spørsmålsobjekter
let questions = [question1, question2, question3]

// Målet er å få JavaScript til å skrive spørsmålene til HTML

// Henter elementer fra DOM
let quizContainerEl = document.querySelector('.quiz-container')

let buttonEl = document.querySelector('button')

// Tømmer HTML til quiz containeren
quizContainerEl.innerHTML = ""

// Går gjennom spørsmålene
for(let i=0; i<questions.length; i++){
    let question = questions[i].question
    let options = questions[i].options
    let solution = questions[i].solution

    quizContainerEl.innerHTML += `
    <article id="question${i+1}">
        <h3>${question}</h3>
    </article>
    `

    let questionEl = document.querySelector(`#question${i+1}`)

    // Går gjennom alternativene
    for(let j=0; j<options.length; j++){
        let labelEl = document.createElement('label')

        let radioEl = document.createElement('input')

        radioEl.type = "radio"

        labelEl.appendChild(radioEl)

        labelEl.innerHTML += options[j]

        questionEl.appendChild(labelEl)
    }
}