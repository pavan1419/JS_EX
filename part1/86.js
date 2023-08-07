// ES6 2015
// class keyword
// classes are fake 

class UserDetails{
    constructor(FristName, LastName, age, email, address){
        
    this.FristName = FristName,
    this.LastName = LastName,
    this.age = age,
    this.email = email,
    this.address = address
    }
    about(){return `user name is ${this.FristName} and age is ${this.age}`}
    is18(){return this.age >= 18}
    sing(){return `la la la la la`}

}

const User1 = new UserDetails("pavan" , "awagan" , 19, "pavan@gmail.com" , "lol address")
const User2 = new UserDetails("ravan" , "awagan" , 9, "pavan@gmail.com" , "lol address")
const User3 = new UserDetails("jivan" , "awagan" , 90, "pavan@gmail.com" , "lol address")


console.log(User1.about())
console.log(Object.getPrototypeOf(User2))