
let computers = ["lenovo", "ASUS", "HP"]

// array.length gir lengden av arrayet (Antall elementer)
console.log(computers)
console.log("Antall elementer: " + computers.length)

// Henter ut element fra arrayet
console.log(computers[2])

// Fjerner siste element i arrayet
computers.pop()

// Legger til element til slutt i arrayet
computers.push("Apple")

// Legger til element i starten av arrayet
computers.unshift("Acer")

// fjerner element med en spesifik index (Kan også legge til nye elementer)
computers.splice(1, 2, "Alienware", "Amstrad")

console.log(computers)

for(let i=0; i <computers.length; i++){
    console.log(computers[i] + " er et bra merke")
}