// Tilfeldig flytall fra og med 0 til 1¨
console.log(Math.random())

// Tilfeldig tall fra og med 0 til 6
console.log (Math.random()*6)

// Tilfeldig flytall fra og med 0 til og med 5
console.log (Math.floor(Math.random()*6))

// Tilfeldig flytall fra og med 0 til og med 8
console.log (Math.floor(Math.random()*6)+1)

console.log("")

// Funksjon som ruller en terning
function terning(){
    console.log (Math.floor(Math.random()*6)+1)
}

// Ruller en terning
terning()