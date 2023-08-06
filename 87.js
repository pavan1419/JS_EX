//  class Practice 
// extends method use 
// inheretance 

class Animal{
    constructor(Name, age){
       this.Name = Name,
       this.age = age 
    }
    is18(){
        if(this.age <= 18){
            return (true)}
            else{
                return false
            }
        }
            
    iscute(){
        return (`yes ${this.Name} is cute`)
    }
}

// const Animel1  = new Animal("bhighi billy " , 4)

// console.log(Animel1.is18())
// console.log(Animel1.iscute())

class dog extends Animal{
}

const dog1 =  new dog("loko", 3)
console.log(dog1.age)
console.log(dog1.is18())
console.log(dog1)