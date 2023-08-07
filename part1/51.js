// default parameters

// function addTwo(a,b){
//     if(typeof b === "undefined"){
//     b=0
//     }
//     return a+b
// }
// console.log(addTwo(4,5))



function addTwo(a=0,b=0){
    
    return a+b
}
console.log(addTwo(1,5))