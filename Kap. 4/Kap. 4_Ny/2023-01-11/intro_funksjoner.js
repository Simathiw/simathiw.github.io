// Lager en funksjon
function godDag(){
    console.log("God dag alle sammen!")
}

// Kaller funksjonen (Gjør et funksjonskall)
godDag()
godDag()
godDag()

// Funksjon som regner ut volumet av en kule
function volumKule(r){
    const pi = Math.PI

    let v = (4/3)*pi*r**3

    console.log(`En kule med radius ${r} har volum ${v.toFixed(2)}`)
}

console.log("") //Linjeskift

/* volumKule(5) */

for (let radius=1; radius<7; radius++) {
    volumKule(radius)
}

// Funksjon som regner ut areal og omkrets av et rektangel
function rektangel(l,b){
    let areal = l*b
    let omkrets = 2*l + 2*b

    console.log(`Et rektangel med lengde ${l} og bredde ${b} har:`)

    console.log(`- et areal på ${areal}`)
    console.log(`- en omkrets på ${omkrets}`)
}

console.log("")

rektangel(3,9)

