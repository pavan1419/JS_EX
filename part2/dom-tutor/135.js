function ricePromice(){
const bucket = ['coffee','chips','vegetables','rice','salt']

return new Promise((resolve , reject)=>{
    if(bucket.includes("rice") && bucket.includes("vegetables") && bucket.includes("salt")){
        resolve({value : "firde Rice"})
    }else{
        reject("somthing is wrong")
    }

})
}

ricePromice().then(
    (myfrideRice)=>{
        console.log("ready",myfrideRice)
    }
).catch((error1)=>{
    console.log("somthing is missing")
})

