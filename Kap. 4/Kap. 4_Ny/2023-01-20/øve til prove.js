/* let a = 5
let b = a + 1
a = a + 3
b = a*b

console.log(b) */

/* function sum(a,b){
    return a+b;
}

console.log(sum(3,4))
console.log (sum("3","4")) */

/* let variabel = 8;
let i = 2;

while (i < 5){
    variabel = variabel + 1;
    i += 2
}
console.log(variabel) */

/* let arrA = [5,3,,8,11];
let arrB = [4,1,13,7];

console.log(arrA[3] + arrB[0]); */

/* function f(x) {
    return x**2 - 5
}
let x1 = 2
let x2 = 4
let v = (f(x2) - f(x1))/(x2 - x1);
console.log(v) */

/* function ukjent (a, b, c, d){
    if(a < c){
        c = a;
    }else{
        a = c;
    }

    if (b < d){
        d = b;
    }else{
        b = d;
    }

    if (a > b){
        b = a;
    }else{
        a = b;
    }

    return a
}

console.log(ukjent(15, 7, 3, 11)); */

for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        if (i === j){
            console.log(i,j)
        }
    }
}