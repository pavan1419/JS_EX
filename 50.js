// block scope vs function scope
 
// let and const is block scope
// var is function scope 

{
    let Name = "pavan"
    const Lname = "awagan"
    var age = "23"
    console.log(Name)
    console.log(Lname) 
}
console.log(age)

function check(){
    let Name = "pa"
    const Lname = "gan"
    var age = "24"

    console.log(Name)
}
check()