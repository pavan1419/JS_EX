// promise = browser feature not js feature


console.log("script started")


// promice created 
const bucket = ['coffee','chips','vegetables','rice','salt']

const friedRicePromice = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt")){
        resolve({value : "fride rice"})
    }else{
        reject("no fried rice")
    }
})

// 2 we have to consume promise 

friedRicePromice.then((Mydata)=>
// after promice is resolved
{
    console.log("ready", Mydata)
}   ,
// otherwise prmice is not completed or rejected
).catch((error)=>{console.log(error)})

setTimeout(()=>{console.log("lob yoyu")},0)


for(let i = 0 ; i<100 ; i++){
    console.log(Math.random()*10)
}

console.log("script ended")
