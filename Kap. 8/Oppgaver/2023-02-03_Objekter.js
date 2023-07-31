
// Dette er ikke en liste!! Derfor kan di ikke putte dette i en for-løkke. (Se hvordan det er gjort under)
let meg = {
    navn: "Sigrun Mathilde",
    fodselsaar: 2005,
    favorittfilm: "The Lord of the Rings",
    favorittbok: "Heldigvis hadde jeg melka",
    favorittall: 11,
    favorittmat: ["Trøndersodd", "Taco", "Pasta", "Pizza"]
}    
    
console.log(meg.navn)
console.log(meg["navn"])

console.log(meg.favorittmat)

let navn = meg.navn
let aar = meg.fodselsaar
let film = meg.favorittfilm
let bok = meg.favorittbok
let tall = meg.favorittall
let mat = meg.favorittmat

console.log(`Jeg heter ${navn} og ble født i ${aar}.`)
console.log(`Min favorittfilm er ${film}, min favorittbok er ${bok} mitt favorittall er ${tall} og min favorittmat er ${mat}`)

let soster = {
    navn: "Ingrid Synnøve",
    fodselsaar: 2008,
}

let familie = [meg, soster]

for (let i=0; i<familie; i++){
    let navn = familie[i].navn
    let aar = familie[i].fodselsaar

    
}