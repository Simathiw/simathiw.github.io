
function mestring(){
    console.log("Jeg mestrer JavaScript!")
}

mestring()
mestring()
mestring()
mestring()

console.log("")

function sirkel(r){
    const pi = Math.PI
    omkrets = (r*2)*pi
    areal = (r**2)*pi

    console.log(`Omkretsen og arealet til sirkelen er:`)
    console.log(`- omkretsen er ${omkrets.toFixed(2)}`)
    console.log(`- arealet er ${areal.toFixed(2)}`)
}

sirkel(3)

console.log("")

function trekant(h,s){
    omkrets = s+s+s
    areal = (h/2)*s
    
    console.log(`Omkretsen og arealet til denne likesidede trekanten er:`)
    console.log(`- omkretsen er ${omkrets.toFixed(2)}`)
    console.log(`- arealet er ${areal.toFixed(2)}`)
}

trekant(5,8)

console.log("")

function sylinder(h,g,t,b,s){
    overflateAreal = t+b+s
    volum = h*g
    
    console.log(`Overflatearealet og volumet til denne sylinderen er:`)
    console.log(`- overflatearelaet er ${overflateAreal.toFixed(2)}`)
    console.log(`- volumet er ${volum.toFixed(2)}`)
}

sylinder(4,5,2,6,5)

console.log("")

/* function tid(sek){
    timer=(sek/60)/60
    minutter=(sek/60)
    sekunder = sek

    console.log(`${sek} sekunder er lik:`)
    console.log(`- ${timer.toFixed(2)} timer`)
    console.log(`- ${minutter.toFixed(2)} minutter`)
    console.log(`- ${sekunder} sekunder`)
} 

tid(1759)*/

console.log ("")

function terning(){
    console.log(`Terningkast: ${Math.floor(Math.random()*6)+1}`)
}

terning()

console.log("")

function terningD(){
    console.log(`Terningkast: ${Math.floor(Math.random()*20)+1}`)
}

terningD()

console.log("")

function tid (sek){
    time = (sek/60)/60
    minutter = (sek/60)

    if (time > 1){
        console.log(`${sek} sekunder er lik ${time.toFixed(1)} timer`)
    }
    else if (time < 1){
        console.log(`${sek} sekunder er lik ${minutter.toFixed(1)} minutter`)
    }
}

tid(3602)