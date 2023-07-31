/* let array = [1,2,3]
let sum = 0

for (let i=0;i<array.length; i++){
    sum += array [i]
}

console.log(sum) */

/* let max = 100000
let sum = 0
for (let i=1; i<=max; i++){
    for(let j=i;j<=max;j++)
    //console.log(i*j)
    sum += i*j
}

console.log(sum) */

n = 100**2
function sumHeltall (n){
    if (n <= 1){
        return n
    }else{
        return n + sumHeltall(n-1)
    }
}

console.log(n)