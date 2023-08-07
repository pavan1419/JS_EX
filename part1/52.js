// rest parameters 

function myFun(a,b,...c){
    console.log(`value of a is ${a}`);
    console.log(`value of b is ${b}`);
    console.log(`value of c is ${c}`);

}
myFun(2,4,6,5,7,8,5)


const addAll =(...numbers)=>{
    let total = 0
    for(let number of numbers){
        total = total +number
    }
    return total
}

console.log(addAll(2,3,5,5,6))