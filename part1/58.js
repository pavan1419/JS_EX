// filter method in arrya 

const numbers =[1,2,3,4,5,6,7,8,9]

const isEven = function(numbers){
    return numbers%2 === 0 
}

const ans = numbers.filter(isEven)
console.log(ans)


const no =  [1,2,3,4,5,6,7,8,9]

// const isOdd = function(no){
//     return no%2 !== 0;
// }

console.log(no.filter(isOdd = (no)=>{
    return no%2 !== 0
}))