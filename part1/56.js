// important array methodes
//foreach
//map
//filter
//reduce

// const no = [1,2,3,4,5]


// function multiBy2(no , index){
// console.log(` ${no} is multiply by 2`)
// console.log(no*2)
// }

// for(let i =0;i<no.length;i++){
//     // console.log(i)
//     multiBy2(no[i],i)

// }

//use of foreach as for loop
// no.forEach(multiBy2)


// const b = [1,2,3,4,5]

// b.forEach(function(no1 , index1){
//     console.log(` ${no1} is multiply by 2`)
// console.log(no1*2)

// })


// const c = [1,2,3,4,5,6]

// c.forEach(function(n1,i1){
//     console.log(`${n1} is muliply by 2 is = ${n1*2}`)
// })


// foreach with objects

const user =[
    {fName : "pavan" , age : 23},
    {fName : "ram" , age : 203},
    {fName : "shyam" , age : 24},
    {fName : "rutwik" , age : 25}

]

user.forEach(function(user1){
    console.log(`name is ${user1.fName} `)
})

for(let user1 of user){
    console.log(user1.fName)
}


user.forEach((user1)=>{
    console.log(`name is ${user1.fName} `)
})