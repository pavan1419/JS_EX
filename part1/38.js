//how to iterate object 

const person = {
    Name : "pavan",
    age : 23,
    "person hobby" : ['palying',"gaming", "slepping"]
    
}

//console.log(person)


// for (let key in person)
// {
//     console.log(`${key} : ${person[key]}`)
// } 

//console.log(Object.keys(person))

for(let key of Object.keys(person))
{
    console.log(person[key])
}