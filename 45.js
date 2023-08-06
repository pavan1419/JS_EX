//function expression
function sing(){
    console.log("happy birthday to you ...")
}
sing()

const add = function(n1,n2,n3){
return n1+n2+n3 }

  console.log(add(4,6,5)) 


const  isEven = function(number)
{
    if(number % 2 ===0){
        return true
    }
        return false
    
}

console.log(isEven(3))


function iseven(no1){
    return no1 %2 ===0
}
console.log(iseven(2))



// function
const fChar = function(String){
   return String[0]

}
console.log(fChar("abc"))




//function for compering array and number
const findTar = function(array, target){
    for(let i = 0;i<array.length;i++){
        if(array[i]===target){
            return i
        }
        
    }return -1
}
const myArray = [2,4,6,8]
console.log(findTar(myArray , 4))