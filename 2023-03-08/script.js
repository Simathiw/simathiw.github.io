let topEl = document.querySelector(`.top`)
let decreaseEl = document.querySelector(`.decrease`)
let increaseEl = document.querySelector(`.increase`)
let buttonEl = document.getElementById(`#button`)
let visitEl = document.querySelector(`.visit`)

// Dersom vi ikke har egenskapen count i localStorage, skal den ha verdien 0
if (!localStorage.count){
    localStorage.count = 0
}

if (localStorage.visitation){
    localStorage.visitation = Number(localStorage.visitation) + 1
}
else{
    localStorage.visitation = 1
}

visitEl.innerHTML = `This is your ${localStorage.visitation}. visit on this website`;

topEl.innerHTML = localStorage.count

// Legger til lyttere for å øke eller minke count
decreaseEl.addEventListener(`click`,  changeNumber)
increaseEl.addEventListener(`click`,  changeNumber)
buttonEl.addEventListener(`click`, resetBtn)

// Funksjon som øker og minker count
function changeNumber(e){
    if (e.target.classList.contains(`decrease`)) {
        localStorage.count = Number(localStorage.count) - 1
    }
    
    else if (e.target.classList.contains(`increase`)){
        localStorage.count = Number(localStorage.count) + 1
    }
    
    // Opdaterer tallet inn i HTML
    topEl.innerHTML = localStorage.count
}

function resetBtn(){
    console.log(reset.Btn)
    /* localStorage.count = "0" */
}
// localStorage.count = 0 (for knapp)