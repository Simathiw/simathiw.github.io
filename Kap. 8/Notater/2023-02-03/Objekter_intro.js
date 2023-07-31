// Lager et objekt
let euler = {
    fornavn: "Leonhard",
    etternavn: "Euler",
    fodt: 1707
}

console.log(euler)

// Henter ut fornavn
console.log(euler.fornavn)

// Henter ut fødselsår
console.log(euler["fodt"])

let gauss = {
    fornavn: "Carl Friedrich",
    etternavn: "Gauss",
    fodt: 1777
}

let newton = {
    fornavn: "Isaac",
    etternavn: "Newton",
    fodt: 1643
}

// Lager en liste med objekter
let matematikere = [euler, gauss, newton]

// Skriver ut informasjon om matematikerene
for (let i=0; i<matematikere.length; i++){
    let fornavn = matematikere[i].fornavn
    let etternavn = matematikere[i].etternavn
    let fodt = matematikere[i].fodt
    
    console.log(`Matematikeren ${fornavn} ${etternavn} er født ${fodt}`)
}