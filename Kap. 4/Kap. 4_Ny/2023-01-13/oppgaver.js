console.log("PRØV SELV   s.109")

console.log("Oppgave 1")
console.log("Glabale variabler blir definert utenfor løkker, funksjoner o.l. og gjelder for hele programmet. ")
console.log("Lokale variabler blir definert inne i en løkke, funksjon o.l. og fjelder bare inne i løkken o.s.v.")

console.log ("")

/* console.log("Feil oppgave")  
function endreStil(bakgrunnsfarge, skriftfarge, skriftstorrelse){
    document.body.style.backgroundColor = bakgrunnsfarge
    document.body.style.color = skriftfarge
    document.body.style.fontSize = skriftstorrelse + "%"
}
endreStil("DarkOrange", "White", 120); */

console.log("Oppgave 2")
let poengsum = 0

function leggTilPoeng(){
    poengsum = poengsum +5
}
function trekkFraPoeng(){
    poengsum = poengsum -5
}

leggTilPoeng()
leggTilPoeng()
trekkFraPoeng()
console.log(`Antall poeng ${poengsum}`)

console.log("")

console.log("Oppgave 3")
function visBetaling(pris){
    rabatt = (pris/100) * 20
    tilbudspris = (pris/100) * 80
    
    console.log(`Ordinær pris = ${pris}`)
    console.log(`Rabatt = ${rabatt}`)
    console.log(`Tilbudspris = ${tilbudspris}`)
}

visBetaling(500)
console.log("")
visBetaling(700)
console.log("")
visBetaling(1200)

console.log("")

console.log("PRØV SELV   s.117")

/* console.log("Oppgave 1")
function siHei(navn){
    console.log(`Hei på deg ${navn}`)
}
console.log(siHei(didrik))

console.log("")

console.log("Oppgave 2")
function overUnderLik(tall){
    if (tall > 0){
        document.log("Tallet er større enn null")
    }
    else if (tall < 0){
        document.log("Tallet er mindre enn null")
    }
    else {
        document.log("Tallet er null")
    }
}
overUnderLik(2)

console.log("")

console.log("Oppgave 3")
 */