// Funksjon som ruller en vilkårlig terning
function terning(sider){
    let tilfeldig = Math.floor(Math.random()*sider)+1
    return tilfeldig
}

/* console.log(terning(6)) */

// Lager et program som regner ut summen av antall øyne når jeg kaster fem terninger (tilsvarer "sjanse" i Yatzy)
// Variabel for summen av antall øyne
let S = 0
for (let i=0; i<5; i++){
    let kast = terning(6)
    console.log(`Du rullet ${kast}`)
    S += kast
}

console.log(`Summen er ${S}`)