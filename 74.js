// dont meke mistake


const details = {
    Lname : "Pavan",
    ab : function(){
        console.log(this.Lname)
    }
}

const myFUnc = details.ab.bind(details)
myFUnc()