console.log ("Modulus")

let uke = Number(prompt("skriv inn ett ukenummer:"))

//Sjekker om resten i divisjonen med 2 er ulik 0
if (uke%2 != 0) {
    document.write("Uke " + uke + " er en oddetallsuke")
}

else if (uke === 8 && 14){
    document.write("I uke " + uke + " er det ferie")
}

else {
    document.write("Uke " + uke + " er en partallsuke")
}