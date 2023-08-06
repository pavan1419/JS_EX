// sets 
//store data
// set also have its own method 
// no index based order 
//order is not defined 
//unique items only  

const  no1 = new Set()
no1.add(1)
no1.add(2)
no1.add(3)
no1.add(4)
no1.add(5)
no1.add(6)
no1.add(7)
no1.add(8)

for( let no of no1){
    if(no < 6)
    {
    console.log(no)
    }
}

if (no1.has(1)){
    console.log("number is present")
}
console.log(no1)

const Myarray = [1,2,3,4,5,1,2,3,4]
const UniqueArray = new Set(Myarray)
console.log(UniqueArray)
let length = 0
for(let array1  of UniqueArray){
    length++ 
}
console.log(length)