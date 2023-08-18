const URL = "https://jsonplaceholder.typicode.com/posts"


// const Fetch = fetch(URL)

// console.log(Fetch)

fetch(URL)
.then(response=>{
    if(response.ok){

        return response.json()
    }else {
        throw new Error("somthing went wrong")
    }
})
.then(data =>{
    console.log(data)
})
.catch(error=>{
    console.log(error)
})