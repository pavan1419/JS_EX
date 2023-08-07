//Maps object
// map is an iterable 
// stored in ordered fashion 
// duplicate keys not allowed like object


// //object litral 
// const person =
// {   Fname : "pavan",
//     age : 48
// }

// console.log(person.Fname)
// console.log(person["age"])


const person = new Map();
person.set('fname',  "pavan")
person.set('one' , 1)
person.set(23, "age")
// person.set([1,2,3,4],"hii")
// person.set({abc : 20} , "number")
// console.log(person)

// console.log(person.get('fname'))
// for(let key of person.keys()){
//     console.log(key , typeof key)
// }

for(let [key, val] of person){
    console.log(key , val)
}

const person1 =new Map([["name" , 'pavan'],["age",23]])
console.log(person1)


const person2 = {
    Name : "pavan",
    Id : 1
}
const UserInfo = new Map()
UserInfo.set(person2, {age : 8 , gender : "male"}
)

console.log(person2.Id)
console.log(UserInfo.get(person2).gender)
// console.log(UserInfo)