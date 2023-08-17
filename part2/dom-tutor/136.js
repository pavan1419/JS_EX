function newPromise(){
return new Promise((resolve , reject)=>{
    const value = true;

    setTimeout(()=>{
        // console.log("after 2 seconds")
        if (value) {
            resolve();
        }else{
            reject();
        }
    },2000)
})}

newPromise()
            .then(()=>{console.log("true value")})
            .catch(()=>{console.log("somthing is wrong")});