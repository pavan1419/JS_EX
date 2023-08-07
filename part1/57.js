// map method 
// Map method is same as forEach
// 1)you have to frist create array 
// 2)then you have to create function 
// 3)then call function using Map method 
// 4) for printing array 
// 5) only array returnde by the map method of array 

const no = [1,2,3,4,5]  
const square = function(no){
    return (no*no)
}

console.log(no.map(square))
// const square = function (no){
//     return no*no
// }


// const squareno = no.map(square =(no)=>{return no*no})
// console.log(squareno)


// created varibales Object inside array 
const users = [
    {Name : "pavan", age: 23},
    {Name : "ram", age: 22},
    {Name : "shyam", age: 24},
    {Name : "sundar", age: 27}

]

// defining function as userDetail and passing user 
// and processing user and returning user to calling function


// const  UserDetail = function(users){
//     return users
// }

// defined a variable as Name for calling function for printing user details in array 
const Name = users.map(UserDetail= (users) =>{
    return users.Name
})
console.log(Name)



