//nested destructuring
const users =[
    {UserId : 1, FName : "pavan" , LName : "Awagan"},
    {UserId : 2, FName : "ravish", LName : "Kumar"},
    {UserId :3 , FName : "ravi" , LName : "Mundra"}
]


const [{FName : U1FName},  , {LName} ] = users
console.log(U1FName)
console.log(LName)