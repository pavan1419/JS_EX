// parameter destructuring 
const person = {
    name : "pavan",
    Lname : "awagan"
}

function printDetails(obj){
console.log(obj.name)
console.log(obj.Lname)
}
printDetails(person)

function printDetails1({name, Lname}){
    console.log(name)
    console.log(Lname)
}
printDetails1(person)