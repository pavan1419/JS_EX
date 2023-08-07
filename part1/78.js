const UserMethods = {
    about : function(){
        return `user name is ${this.FristName} and age is ${this.age}`
    },
    is18 : function(){
        return this.age >= 18
    }
}

function UserDetails(FristName, LastName, age, email, address){
    const user = {}
    user.FristName = FristName,
    user.LastName = LastName,
    user.age = age,
    user.email = email,
    user.address = address,
    user.about = UserMethods.about,
    user.is18 = UserMethods.is18
    return user

} 
const User1 = UserDetails("pavan" , "awagan" , 19, "pavan@gmail.com" , "lol address")
const User2 = UserDetails("ravan" , "awagan" , 9, "pavan@gmail.com" , "lol address")
const User3 = UserDetails("jivan" , "awagan" , 90, "pavan@gmail.com" , "lol address")

const u1about = User1.about()
console.log(u1about)
const u2age = User2.is18()
console.log(u2age)