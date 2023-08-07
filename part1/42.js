//object inside array
// very usefull in real world 

const users =[
    {UserId : 1, FName : "pavan" , LName : "Awagan"},
    {UserId : 2, FName : "ravish", LName : "Kumar"},
    {UserId :3 , FName : "ravi" , LName : "Mundra"}
]
// console.log(user)

for (let user of  users){
console.log(user.LName)    
}
