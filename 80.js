const obj1 = {
    key1 : 'value1',
    key2 : "value2"
}
const obj2 = Object.create(obj1)
obj2.key3 = "value3" 

console.log(obj2)

 // ____________________________________________________


const UserMethods = {
    about : function(){
        return `user name is ${this.FristName} and age is ${this.age}`
    },
    is18 : function(){
        return this.age >= 18
    },
    sing : function(){
        return `la la la la la`
    } 
}

function UserDetails(FristName, LastName, age, email, address){
    const user = Object.create(UserMethods)
    user.FristName = FristName,
    user.LastName = LastName,
    user.age = age,
    user.email = email,
    user.address = address
    
    return user

} 
const User1 = UserDetails("pavan" , "awagan" , 19, "pavan@gmail.com" , "lol address")
const User2 = UserDetails("ravan" , "awagan" , 9, "pavan@gmail.com" , "lol address")
const User3 = UserDetails("jivan" , "awagan" , 90, "pavan@gmail.com" , "lol address")

const u1about = User1.about()
console.log(u1about)
const u2age = User2.is18()
console.log(u2age)
console.log(User1.sing())
const SIng1 = User1.sing()
console.log(SIng1)