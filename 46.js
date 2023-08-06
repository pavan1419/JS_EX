// Arrow function
//you just have to add variable then asign values and then use arrow function 
function sing(){
    console.log("happy birthday to you ...")
}
sing()

const sing1 = () =>{
    console.log("happy birthday to me ...")
}
sing1()


const add = (n1,n2,n3) =>{
return n1+n2+n3 }

  console.log(add(4,6,5)) 


// if there is a sing value or sing input then on you can remove pranthesisi
const  isEven = number =>
{
    if(number % 2 ===0){
        return true
    }
        return false
    
}

console.log(isEven(3))


const iseven = (no1) =>{
    return no1 %2 ===0
}
console.log(iseven(2))

const iseven1 = (no1) => no1 %2 ===0;
console.log(iseven1(3))


// function
const fChar = (String) =>String[0]
console.log(fChar("abc"))




//function for compering array and number
const findTar = (array, target)=> {
    for(let i = 0;i<array.length;i++){
        if(array[i]===target){
            return i
        }
        
    }return -1
}
const myArray = [2,4,6,8]
console.log(findTar(myArray , 4))