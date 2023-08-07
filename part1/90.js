// getters and setters

class person{
    constructor(fnme , Lname ,age){
        this.fnme = fnme,
        this.Lname = Lname,
        this.age = age        
    }

    get about(){
        return `my name is ${this.fnme} and my age is ${this.age}`
    }
    set about(about){
        const [fnme , age] = about.split(" ")
        this.fnme = fnme
        this.age = age
    }

}

const person1 = new person("pavan", "awagan" , 23)
person1.about = "pav 28"
console.log(person1.about)