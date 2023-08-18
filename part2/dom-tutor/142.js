const URL = "https://jsonplaceholder.typicode.com/posts"

function sendRequist(method , url ){
    return new Promise(function(resolve, reject){
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.onload= function(){
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.response )
            }else{
                reject(new Error("somthing is wrong"))
            }
        }
        ,xhr.onerror = function(){
            reject(new Error("somthing is wrong"))

        }
        ,xhr.send()
        
    })
}

sendRequist("GET", URL)
.then(response => {
    const data = JSON.parse(response)
    // console.log(response)
    // console.log(data)
    return data
})
.then(data => {
    // console.log(data)
    const id = data[3].id
    return id
})
.then(id=>{
    console.log(id)
    const url = `${URL}/${id}`
    sendRequist = ("GET", url)
})