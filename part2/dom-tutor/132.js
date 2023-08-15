// understanding callbacks 

// function myFUnc(callback){
//     console.log("Task 1")
//     callback()
// }

// // function myFUnc2(){
// //     console.log("Task 2")
// // }


// myFUnc(()=>{
//     console.log("task 2")
// })


function get2Nos(n1,n2, onSuccess, OnError){
    if(typeof n1 === "number" && typeof n2 === "number"){
    console.log(n1,n2)
    onSuccess(n1,n2)}else{
        OnError()
    }
}

get2Nos(2,3,
    (num1,num2)=>{console.log(num1+num2)},
    ()=>{console.log("wrong type ")
console.log("only pass numbers") })