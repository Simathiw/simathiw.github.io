/* const human = ["Per", "Spellmann", 26, "brown"]

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColour: "blue"
};

console.log(human[0])
console.log(person.firstName) */


class human {
    constructor(a, b, c, d){
        this.firstName = a
        this.lastName = b
        this.age = c
        this.eyeColour = d
    }
    birthyear(currYear){
        let year = currYear - this.age
        console.log(`${this.name} is born in ${year}`)
    }
}

let person1 = new human("Berit", "Nordstrand", 52, "blue")
let person2 = new human("Elias", "Elter", 18, "brown")

console.log(person1)
console.log(person2)
person2.birthyear(2023)




class ball {
    constructor(x, y, r){
        this.x = x
        this.y = y
        this.radius = r
    }
}