// const UserMethods = {
//     about : function(){
//         return `user name is ${this.FristName} and age is ${this.age}`
//     },
//     is18 : function(){
//         return this.age >= 18
//     },
//     sing : function(){
//         return `la la la la la`
//     } 
// }

function UserDetails(FristName, LastName, age, email, address){
    const user = Object.create(UserDetails.prototype)
    user.FristName = FristName,
    user.LastName = LastName,
    user.age = age,
    user.email = email,
    user.address = address
    return user

} 
UserDetails.prototype.about = function(){
             return `user name is ${this.FristName} and age is ${this.age}`
         }
UserDetails.prototype.is18 = function(){
            return this.age >= 18}

UserDetails.prototype.sing = function(){
    return `la la la la la`     
}

const User1 = UserDetails("pavan" , "awagan" , 19, "pavan@gmail.com" , "lol address")
const User2 = UserDetails("ravan" , "awagan" , 9, "pavan@gmail.com" , "lol address")
const User3 = UserDetails("jivan" , "awagan" , 90, "pavan@gmail.com" , "lol address")


console.log(User1.sing())
console.log(User2.about())
console.log(User3.is18())