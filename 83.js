function user(Name,age){
     return this.Name = Name,
    this.age = age
}
user.prototype.about = function(){
    return (`your name is ${this.Name} and age is ${this.age}`)
}
const ans = new user("pavan", 22)

// new keyword
// new created new empty object
// returning this 
//  new keyword also chaining prototype with function 
//cunstroctor function

console.log(ans.about())


// _____________________________________________


function UserDetails(FristName, LastName, age, email, address){
    
    this.FristName = FristName,
    this.LastName = LastName,
    this.age = age,
    this.email = email,
    this.address = address
} 
UserDetails.prototype.about = function(){
             return `user name is ${this.FristName} and age is ${this.age}`
         }
UserDetails.prototype.is18 = function(){
            return this.age >= 18}

UserDetails.prototype.sing = function(){
    return `la la la la la`     
}

const User1 = new UserDetails("pavan" , "awagan" , 19, "pavan@gmail.com" , "lol address")
const User2 = new UserDetails("ravan" , "awagan" , 9, "pavan@gmail.com" , "lol address")
const User3 = new UserDetails("jivan" , "awagan" , 90, "pavan@gmail.com" , "lol address")


console.log(User1)
console.log(User2.is18())
