// promise.resolve
//promise.chaining

// const promiseNew = Promise.resolve(5)

// promiseNew.then((value)=>{
//     console.log("value is : ",value)
// })

// then 
//then only return promise
// then method only return promise resolved value 

function myPromise(){
    return new Promise((resolve,reject)=>{
resolve("foo")
    })
}


// chaining 
// how chaning works 
myPromise().then((value) => {
    console.log(value)
    value += " baar"
    // console.log(value)
    return value;
}).then(value=>{
    console.log(value)
    value += " foo"
    return value
}).then(value=>{
    console.log(value)
})