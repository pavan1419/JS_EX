

function UserDetails(FristName, LastName, age, email, address){
    const user = {}
    user.FristName = FristName,
    user.LastName = LastName,
    user.age = age,
    user.email = email,
    user.address = address,
    user.about = function(){
        return (`user name is ${this.FristName} and age is ${this.age}`)
    }
    user.is18 = function(){
        return this.age >= 18
    }
    return user

} 
const User1 = UserDetails("pavan" , "awagan" , 19, "pavan@gmail.com" , "lol address")
const User2 = UserDetails("ravan" , "awagan" , 9, "pavan@gmail.com" , "lol address")
const User3 = UserDetails("jivan" , "awagan" , 90, "pavan@gmail.com" , "lol address")

console.log(User1)

const is18 = User1.is18()
console.log(is18)
// console.log(User1.is18())

const about = User2.about()
console.log(about)