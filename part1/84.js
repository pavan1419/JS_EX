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


for(let key in User2){
    console.log(key)
    // if(User2.hasOwnProperty(key)){
    //     console.log(key)
    // }

}