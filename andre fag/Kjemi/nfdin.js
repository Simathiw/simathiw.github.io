let BTB = 0
let F = 0

BTB = (0.09 + 0.09825 + 0.096 + 0.097 + 0.096) / 5

F = (0.09575 + 0.0984 + 0.0954 + 0.096) / 4

console.log(`Gjennomsnittkonsentrasjonen av konsentrasjonen med BTB er ${BTB}`)
console.log(`Gjennomsnittkonsentrasjonen av konsentrasjonen med fenottalin er ${F}`)

let standardavvik_BTB = 0
let standardavvik_F = 0
let n = 5
let m = 4

standardavvik_BTB = Math.sqrt((1/(n-1)) * ((0.09-BTB)**2 + (0.09825-BTB)**2 + (0.096-BTB)**2 + (0.097-BTB)**2 + (0.096-BTB)**2))
standardavvik_F = Math.sqrt((1/(m-1)) * ((0.09575-BTB)**2 + (0.0984-BTB)**2 + (0.0954-BTB)**2 + (0.096-BTB)**2))

console.log(`Standardavviket for BTB-løsningen er ${standardavvik_BTB}`)
console.log(`Standardavviket for fenottalin-løsningen er ${standardavvik_F}`)