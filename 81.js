function hello(){
    console.log("hello pavan")
}
hello()


// function is work as function but alos work as object
// i can id my own properties to the function
// function => object

// hello.myoqnprop = "pavan pavan "
// console.log(hello.myoqnprop)

//prototype
console.log(hello.prototype)

// only functions provide prototype property

// checking prototype is present or not 

function na(){
    console.log("ha ha ha ")
}

if ( na.prototype){
    console.log("yes")
}else{console.log("false p is not ")}

const na1 = {
    key1 : "val1"
}

if(na1.prototype){
    console.log(true)
}else{console.log(false)}


// values adding to prototype 
hello.prototype.string = "hiii biro"
hello.prototype.array = [1,2,3,4,4]
hello.prototype.sing = function(){
    return ("lalalalala")
}

console.log(hello.prototype.sing())
