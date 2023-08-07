
function info() {
    return console.log(`your name is ${this.Fname} your age is ${this.age}`)
 }

const perseon = {
    Fname : "pavan",
    age : 29,
    about : info
}


const perseon2 = {
    Fname : "avan",
    age : 2,
    about : info
}


const perseon3 = {
    Fname : "pan",
    age : 9,
    about : info
}


console.log(perseon2.about())
