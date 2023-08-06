// call apply blind


// function hello(){
//     console.log("hello  ajii")
// }
// hello()


 function about(hobby ,  music ){
    console.log(this.Fname, this.age, hobby, music)
}

const user  ={
    Fname : "pavan",
    age : 23
}


const user1  ={
    Fname : "avan",
    age : 33
}

const user2  ={
    Fname : "van",
    age : 21
}

// //opt is undefined for empty value
// user.about.call();

//"this" is accepting vallue from user2
// also i can pass value for hobby and music 

//Call method  
about.call(user2);


//apply method 
about.apply(user1,["gaming", "tere bin "])

//bind method 

const bindfunc = about.bind(user,"ddd",)
console.log(bindfunc())
bindfunc()


